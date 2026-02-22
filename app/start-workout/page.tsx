import { CancelWorkoutBtn } from "@/components/start-workout/cancel-workout-btn";
import WorkoutTemplate from "@/components/start-workout/workout-template";
import workoutData from "@/lib/dummydata/workout-templates.json";
import WorkoutScreenLayout from "@/components/layouts/workout-screen-layout";

export default function StartWorkout() {
  return (
    <WorkoutScreenLayout title="Start new Session">
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
    </WorkoutScreenLayout>
  );
}
