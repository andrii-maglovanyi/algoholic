type Tuple = {
  startTime: number;
  endTime: number;
};

// O(n^2) time
// O(n) space
const compareAllPairs = (slots: Tuple[]) => {
  const meetings: Tuple[] = [slots[0]];

  const isInRange = (slot: Tuple) => {
    let meet: Tuple | undefined;
    meetings.forEach((meeting) => {
      if (
        (slot.startTime >= meeting.startTime &&
          slot.startTime <= meeting.endTime) ||
        (slot.endTime >= meeting.startTime &&
          slot.endTime <= meeting.endTime) ||
        (slot.startTime <= meeting.startTime && slot.endTime >= meeting.endTime)
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
      meetings.push(slot);
    }
  });

  return meetings.sort((a, b) => a.startTime - b.startTime);
};

// O(n*log(n)) time
// O(1) space
const sortAndMerge = (meetings: Tuple[]) => {
  const slots = [...meetings].sort((a, b) => a.startTime - b.startTime);

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];
    const next = slots[i + 1];

    if (next && slot.endTime >= next.startTime) {
      slot.endTime = Math.max(slot.endTime, next.endTime);
      slots.splice(i + 1, 1);
      i--;
    }
  }
  return slots;
};

export const solutions = {
  compareAllPairs,
  sortAndMerge,
};
