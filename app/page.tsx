"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { StartWorkoutBtn } from "@/components/home/start-workout-btn";

export default function Page() {
  return (
    <main>
      <div className="m-8 items-center flex space-x-4">
        <ThemeToggle />
        <p>Theme Toggle</p>
      </div>

      <div className="m-8">
        <StartWorkoutBtn />
      </div>
    </main>
  );
}
