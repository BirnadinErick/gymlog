import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

export function StartWorkoutBtn() {
  return (
    <Link href="/start-workout">
      <Button variant="outline" size="sm">
        <PlayIcon /> Start new Workout
      </Button>
    </Link>
  );
}
