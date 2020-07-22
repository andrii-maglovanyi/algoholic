type Tuple = {
  startTime: number;
  endTime: number;
};

const freeCalendar = (slots: Tuple[]) => {
  const meetings: Tuple[] = [slots[0]];

  const isInRange = (slot: Tuple) => {
    let meet: Tuple | undefined;
    meetings.forEach((meeting) => {
      if (
        slot.startTime >= meeting.startTime &&
        slot.startTime <= meeting.endTime
      ) {
        meet = meeting;
      }

      if (
        slot.endTime >= meeting.startTime &&
        slot.endTime <= meeting.endTime
      ) {
        meet = meeting;
      }
    });

    return meet;
  };

  slots.forEach((slot) => {
    const meeting = isInRange(slot);
    if (meeting) {
      meeting.startTime = Math.min(meeting.startTime, slot.startTime);
      meeting.endTime = Math.max(meeting.endTime, slot.endTime);
    } else {
      if (slot.startTime < meetings[0].startTime) {
        meetings.unshift(slot);
      } else {
        meetings.push(slot);
      }
    }
  });

  return meetings;
};

export const solutions = {
  "Free Calendar": freeCalendar,
};
