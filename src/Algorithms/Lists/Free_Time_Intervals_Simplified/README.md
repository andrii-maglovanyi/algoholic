# See the times in a day when everyone is available

To do this, you’ll need to know when any team is having a meeting. A meeting is stored as objects with integer properties `startTime` and `endTime`. These integers represent the number of 30-minute blocks past 9:00am.

```javascript
{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm
```

Write a function that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

```javascript
// Given:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

// Result:
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
```

**Do not assume the meetings are in order.** The meeting times are coming from multiple teams.
