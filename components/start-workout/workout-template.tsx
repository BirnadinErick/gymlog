import { AvatarIcon } from "../generic/avatar-icon";
import { SelectTemplateButton } from "./select-template-button";

export default function WorkoutTemplate() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <AvatarIcon />
        <div className="flex flex-col">
          <p className="font-semibold">Push</p>
          <p className="text-neutral-500">Seitheben, Inclined shoulder...</p>
        </div>
      </div>
      <div>
        <SelectTemplateButton />
      </div>
    </div>
  );
}
