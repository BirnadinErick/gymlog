import { CancelWorkoutBtn } from "../start-workout/cancel-workout-btn";

interface WorkoutScreenLayoutProps {
  title?: string;
  navbarItem?: React.ReactNode;
  children: React.ReactNode;
}

export default function WorkoutScreenLayout({
  title,
  navbarItem,
  children,
}: WorkoutScreenLayoutProps) {
  return (
    <>
      <div className="flex items-center justify-between h-16 px-8 py-4 bg-neutral-800">
        {title ? <h1>{title}</h1> : null}
        {navbarItem ?? null}
      </div>

      <main className="my-12 px-8">{children}</main>

      <div className="my-8 fixed bottom-0 left-0 right-0 px-8">
        <CancelWorkoutBtn />
      </div>
    </>
  );
}
