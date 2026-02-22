import WorkoutScreenLayout from "@/components/layouts/workout-screen-layout";
import RecordWorkoutTopbar from "@/components/record-workout/topbar";

export default async function RecordWorkoutPage(props: {
  searchParams: Promise<{ template?: string }>;
}) {
  const searchParams = await props.searchParams;
  const templateName = searchParams.template || "Default Workout";

  return (
    <WorkoutScreenLayout navbarItem={<RecordWorkoutTopbar />}>
      <h1>{templateName}</h1>
    </WorkoutScreenLayout>
  );
}
