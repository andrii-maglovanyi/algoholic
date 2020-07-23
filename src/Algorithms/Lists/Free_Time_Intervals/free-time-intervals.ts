const convertTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

type Times = [string, string];

interface IMeetings {
  firstPersonMeetings: Times[];
  firstPersonDayBounds: Times;
  secondPersonMeetings: Times[];
  secondPersonDayBounds: Times;
  meetingDuration: number;
}

// O(n*Log(n)) time
// O(n) space
const meetingsSolution = ({
  firstPersonMeetings: meetingsA,
  firstPersonDayBounds: boundsA,
  secondPersonMeetings: meetingsB,
  secondPersonDayBounds: boundsB,
  meetingDuration,
}: IMeetings) => {
  const slots = [];

  const latestStartBound =
    convertTime(boundsA[0]) < convertTime(boundsB[0]) ? boundsB[0] : boundsA[0];

  const earliestEndBound =
    convertTime(boundsA[1]) > convertTime(boundsB[1]) ? boundsB[1] : boundsA[1];

  let mergedArray = [...meetingsA, ...meetingsB];

  mergedArray.sort((a: any, b: any) => convertTime(a[0]) - convertTime(b[0]));

  for (let i = 0; i < mergedArray.length; i++) {
    const current = mergedArray[i];
    const next = mergedArray[i + 1];
    if (!next) {
      break;
    }

    if (convertTime(next[0]) - convertTime(current[1]) >= meetingDuration) {
      slots.push([current[1], next[0]]);
    }
  }

  if (convertTime(latestStartBound) < convertTime(mergedArray[0][0])) {
    slots.unshift([latestStartBound, mergedArray[0][0]]);
  }

  const latestMeetingFinish =
    convertTime(mergedArray[mergedArray.length - 1][1]) <
    convertTime(mergedArray[mergedArray.length - 2][1])
      ? mergedArray[mergedArray.length - 2]
      : mergedArray[mergedArray.length - 1];

  if (convertTime(earliestEndBound) > convertTime(latestMeetingFinish[1])) {
    slots.push([latestMeetingFinish[1], earliestEndBound]);
  }

  return slots;
};

export const solutions = {
  "Meeting Solution": meetingsSolution,
};
