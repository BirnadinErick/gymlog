import { AvatarIcon } from "@/components/generic/avatar-icon";
import { SelectTemplateButton } from "@/components/start-workout/select-template-button";
import WorkoutTemplate from "@/components/start-workout/workout-template";

export default function StartWorkout() {
  return (
    <>
      <div className="h-16 px-8 py-4 bg-neutral-800">
        <h1>Start new Session</h1>
      </div>

      <main className="my-12 px-8">
        <div>
          <h2 className="text-neutral-500">Workout Template</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <WorkoutTemplate key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
