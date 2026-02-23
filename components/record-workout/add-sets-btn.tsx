import { CirclePlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function AddSetzBtn() {
  return (
    <div>
      <Button size="lg" variant="secondary" className="w-full">
        <CirclePlusIcon />
        Satz hinzufügen
      </Button>
    </div>
  );
}
