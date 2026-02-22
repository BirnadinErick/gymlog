import { AvatarIcon } from "../generic/avatar-icon";
import { SelectTemplateButton } from "./select-template-button";
import Link from "next/link";

interface WorkoutTemplateProps {
  uuid: string;
  name: string;
  description: string;
}

export default function WorkoutTemplate({
  uuid,
  name,
  description,
}: WorkoutTemplateProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <AvatarIcon />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <p className="text-neutral-500">{description}</p>
        </div>
      </div>
      <div>
        <Link href={`/record-workout?template=${uuid}`}>
          <SelectTemplateButton />
        </Link>
      </div>
    </div>
  );
}
