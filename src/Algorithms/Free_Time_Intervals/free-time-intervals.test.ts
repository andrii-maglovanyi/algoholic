// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./free-time-intervals";

describe("Meetings", () => {
  TestSolutions(solutions, (solution) => {
    const dayOne = solution({
      firstPersonDayBounds: ["9:00", "20:00"],
      firstPersonMeetings: [
        ["9:00", "10:30"],
        ["12:00", "13:00"],
        ["16:00", "18:00"],
      ],
      secondPersonDayBounds: ["10:00", "18:30"],
      secondPersonMeetings: [
        ["10:00", "11:30"],
        ["12:30", "14:30"],
        ["14:30", "15:00"],
        ["16:00", "17:00"],
      ],
      meetingDuration: 30,
    });
    expect(dayOne).toEqual([
      ["11:30", "12:00"],
      ["15:00", "16:00"],
      ["18:00", "18:30"],
    ]);

    const dayTwo = solution({
      firstPersonDayBounds: ["9:00", "18:00"],
      firstPersonMeetings: [
        ["10:00", "10:30"],
        ["12:00", "13:00"],
      ],
      secondPersonDayBounds: ["9:30", "18:30"],
      secondPersonMeetings: [
        ["10:00", "11:30"],
        ["11:30", "12:30"],
      ],
      meetingDuration: 30,
    });
    expect(dayTwo).toEqual([
      ["9:30", "10:00"],
      ["13:00", "18:00"],
    ]);
  });
});
