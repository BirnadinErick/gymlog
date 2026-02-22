import WorkoutScreenLayout from "@/components/layouts/workout-screen-layout";
import RecordWorkoutTopbar from "@/components/record-workout/topbar";
import WorkoutCardHead from "@/components/record-workout/workout-card-head";
import dummyWorkouts from "@/lib/dummydata/workouts.json";

export default async function RecordWorkoutPage(props: {
  searchParams: Promise<{ template?: string }>;
}) {
  const searchParams = await props.searchParams;
  const _templateName = searchParams.template || "Empty Session";

  return (
    <WorkoutScreenLayout navbarItem={<RecordWorkoutTopbar />}>
      <div>
        <WorkoutCardHead
          uuid={dummyWorkouts.workouts[0].uuid}
          heading={dummyWorkouts.workouts[0].heading}
          imageURL={dummyWorkouts.workouts[0].imageUrl}
        />
      </div>
    </WorkoutScreenLayout>
  );
}
