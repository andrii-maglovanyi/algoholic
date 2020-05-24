You have a calendar of available time slots. You also have a list of meetings that need to be scheduled. Each meeting and each time slot can be between 1 and 4 hours in length.

Write a program to assign meetings to available time slots. You can assign more than one meeting to a single time slot, as long as the free time in the slot isn't exceeded by the total time of the meetings.

(e.g. You can put two 2-hour meetings into a single 4-hour slot. You could also put two 1-hour meetings into a single 3- or 4-hour slot, and leave the remaining time unused.)

In the code below, each type of item (openings, and meetings) are represented by an array of integers identifying their length in hours.

Your output can be anything that reasonably conveys the arrangement. e.g.

```javascript
const result = [
  { opening: 2, total: 2, meetings: [1, 1] },
  { opening: 4, total: 4, meetings: [2, 1, 1] },
  { opening: 3, total: 1, meetings: [1] },
];
```
