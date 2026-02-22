import MoreOptionsBtn from "./more-options-btn";
import WorkoutHeading from "./workout-heading";

interface WorkoutCardHeadParams {
  uuid: string;
  heading: string;
  imageURL?: string;
}

export default function WorkoutCardHead({
  uuid,
  heading,
  imageURL,
}: WorkoutCardHeadParams) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <WorkoutHeading heading={heading} iconName={imageURL} />
        <MoreOptionsBtn uuid={uuid} />
      </div>
    </div>
  );
}
