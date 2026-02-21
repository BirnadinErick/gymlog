import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarIcon() {
  return (
    <Avatar>
      <AvatarImage
        src="https://unsplash.com/photos/dN-R9royffU/download?force=true&fm=jpg"
        alt="generic avatar"
        className="grayscale"
      />
      <AvatarFallback>BE</AvatarFallback>
    </Avatar>
  );
}
