### Cold vs. Hot Observables

Cold observables start running upon subscription, i.e., the observable sequence only starts pushing values to the observers when Subscribe is called. Values are also not shared among subscribers. This is different from hot observables such as mouse move events or stock tickers which are already producing values even before a subscription is active. When an observer subscribes to a hot observable sequence, it will get all values in the stream that are emitted after it subscribes. The hot observable sequence is shared among all subscribers, and each subscriber is pushed the next value in the sequence. For example, even if no one has subscribed to a particular stock ticker, the ticker will continue to update its value based on market movement. When a subscriber registers interest in this ticker, it will automatically receive the next tick.

---

**map** creates another stream based on current stream data. (For example on each emitted value we want emit 1 in separate stream):

```
clickStream: ---a---b------c-----d--->
                   map(item => 1)
mapStream:   ---1---1------1-----1--->
```

**mergeMap**/**flatMap** maps each value to an Observable, then flattens all of these inner Observables using mergeAll. Consumes all values on all streams.

```javascript
const outer = Observable.interval(1000).take(2);
const source = outer.mergeMap(function (x) {
  return Observable.interval(500)
    .take(3)
    .map((y) => `stream ${x} : value ${y}`);
});
```

```
mergeMap stream 0 : value 0
mergeMap stream 0 : value 1
mergeMap stream 1 : value 0
mergeMap stream 0 : value 2
mergeMap stream 1 : value 1
mergeMap stream 1 : value 2
```

**switchMap** maps each value to an Observable, then flattens all of these inner Observables using switch. Switches to inner observable stream when as soon as values are emitted on it.

```javascript
const outer = Observable.interval(1000).take(2);
const source = outer.switchMap(function (x) {
  return Observable.interval(500)
    .take(3)
    .map((y) => `stream ${x} : value ${y}`);
});
```

```
switchMap stream 0 : value 0
switchMap stream 1 : value 0
switchMap stream 1 : value 1
switchMap stream 1 : value 2
```

**filter** creates another stream based on filtering current stream (filtering emitted values):

```
clickStream: ---3---2------4-----1--->
              filter(item => item > 2)
filterStream:---3----------4--------->
```

**scan** aggregates all previously emitted values and produces value on the stream as a function g(aggregatedValue, currentValue):

```
clickStream: ---2---2------3-----1--->
           scan((sum, item) => sum += item)
scanStream:  ---2---4------7-----8--->
```

```javascript
const observable = Observable.from([1, 2, 3, 4, 5, 6]);
const count = observable.scan((acc, one) => acc + one, 0);
count.subscribe((x) => {
  console.log("scan shows incremental total", x);
});
```

```
scan shows incremental total 1
scan shows incremental total 3
scan shows incremental total 6
scan shows incremental total 10
scan shows incremental total 15
scan shows incremental total 21
```

**reduce** aggregates the values from source observable to a single value that's emitted when the source completes.

```
clickStream: ---2---2------3-----1--->
           reduce((sum, item) => sum + item, 0)
scanStream:  --------------------8--->
```

- Just like `Array.prototype.reduce()`

```javascript
const observable = Observable.from([1, 2, 3, 4, 5, 6]);
const count = observable.reduce((acc, one) => acc + one, 0);
count.subscribe((x) => {
  console.log("reduce shows only total", x);
});
```

```
reduce shows only total 21
```

**interval** creates stream which emits values with the given interval and start delay:

```

interval(startDelay, intervalTime):
intervalStream: -0-1-2-3-4-5-6-7-8-(.....)-->

```

**buffer** creates stream which buffers emitted values by some criteria (time throttling for example):

```

clickStream: ---2-2-------3------1-2------3--2------->
buffer(interval(1000))
scanStream: ------[2,2]-----[3]-----[1,2]-----[3,2]->

```

**merge** merges two or more separate streams into one resulting stream, which emits data from all merged streams:

```

clickStream: ---c-c-------c------c-c------c--c------->
keyDownStream: -------k---k----k----k---k--------k----->
merge(slickStream, keyDownStream)
mergedStream: ---c-c-k---k-c--k---ckc--k---c--c-k----->

```
