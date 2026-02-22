import { AlarmClockIcon } from "lucide-react";
import WorkoutEndBtn from "./workout-end-btn";

export default function RecordWorkoutTopbar() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center justify-start space-x-2">
        <AlarmClockIcon />

        <p>00:43:28</p>
      </div>

      <WorkoutEndBtn />
    </div>
  );
}
