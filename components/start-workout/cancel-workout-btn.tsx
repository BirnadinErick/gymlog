"use client";

import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function CancelWorkoutBtn() {
  const router = useRouter();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast.info("Session verworfen");
        router.push("/");
      }}
      className="w-full"
    >
      <Trash2Icon />
      Session verwerfen
    </Button>
  );
}
