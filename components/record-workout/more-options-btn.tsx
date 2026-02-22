"use client";

import { EllipsisVerticalIcon } from "lucide-react";
import { Button } from "../ui/button";

interface MoreOptionsBtnParams {
  uuid: string;
}

export default function MoreOptionsBtn({ uuid }: MoreOptionsBtnParams) {
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => console.info(uuid, "workout more options clicked.")}
        size="icon"
      >
        <EllipsisVerticalIcon />
      </Button>
    </div>
  );
}
