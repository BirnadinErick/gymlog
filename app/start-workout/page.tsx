import { CancelWorkoutBtn } from "@/components/start-workout/cancel-workout-btn";
import WorkoutTemplate from "@/components/start-workout/workout-template";
import workoutData from "@/lib/dummydata/workout-templates.json";

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
          {workoutData.workout_templates.map((template) => (
            <WorkoutTemplate
              key={template.uuid}
              uuid={template.uuid}
              name={template.name}
              description={template.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <CancelWorkoutBtn />
        </div>
      </main>
    </>
  );
}
