import { Timeline, Text } from "@mantine/core";
import { Progress } from "@mantine/core";

import "../Styles/TimelineProgress.css";

export default function TimelineProgress({ creditPoints }) {
  const totalCreditPoints = 198;
  const progressPercentage = (creditPoints / totalCreditPoints) * 100;
  return (
    <>
      <div className="container">
        <div className="circle-1">1</div>
        <div className="circle-2">2</div>
        <div className="circle-3">3</div>
        <div className="circle-4">4</div>
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
