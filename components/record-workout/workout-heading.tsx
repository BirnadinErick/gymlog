import { AvatarIcon } from "../generic/avatar-icon";

interface WorkoutHeadingProps {
  iconName?: string;
  heading: string;
}

export default function WorkoutHeading({
  iconName,
  heading,
}: WorkoutHeadingProps) {
  return (
    <div className="flex items-center gap-4 justify-start">
      <AvatarIcon imageURL={iconName} />
      <h2>{heading}</h2>
    </div>
  );
}
