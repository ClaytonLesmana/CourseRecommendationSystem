import { Timeline, Text } from "@mantine/core";
import { Progress, Button } from "@mantine/core";

import "../Styles/TimelineProgress.css";

export default function TimelineProgress({ creditPoints, setYear }) {
  const totalCreditPoints = 198;
  const progressPercentage = (creditPoints / totalCreditPoints) * 100;

  return (
    <>
      <div className="container">
        <Button className="circle-1" onClick={() => setYear(1)}>
          1
        </Button>
        <Button className="circle-2" onClick={() => setYear(2)}>
          2
        </Button>
        <Button className="circle-3" onClick={() => setYear(3)}>
          3
        </Button>
        <Button className="circle-4" onClick={() => setYear(4)}>
          4
        </Button>
        {/* <div className="circle-2">2</div>
        <div className="circle-3">3</div>
        <div className="circle-4">4</div> */}
        <Progress.Root size="xl" className="ProgressRoot">
          <Progress.Section value={progressPercentage} color="">
            <Progress.Label></Progress.Label>
          </Progress.Section>
        </Progress.Root>
      </div>
      {/* <h5 className="progress-label-1">Basics</h5>
      <h5 className="progress-label-2">Advance Topics</h5>
      <h5 className="progress-label-3">Mastery</h5> */}
    </>
  );
}
