## Trip Optimization (maximize your layover)

You have a [X]-hour layover in Paris and want to book some Trips. You prefer too book as few Trips as possible to enjoy the last [X] hours with minimum context switch. How will you arrange your time? Assuming that there is no time cost for transportation between Trips.

Input:
An array of Trips durations (hours), e.g. [1,3,6]
Total remaining hours, e.g. 15

Output:
Minimum number of purchases, eg 3(6 + 6 + 3 = 15)
If there is no way to fill total remaining hours, return -1

```javascript
// input
const tripDurations = [1, 3, 6];
const totalHours = 15;

// output
const minPurchases = 3;
```
