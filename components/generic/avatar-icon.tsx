import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarIcon({ imageURL }: { imageURL?: string }) {
  return (
    <Avatar>
      <AvatarImage
        src={
          imageURL ??
          "https://unsplash.com/photos/dN-R9royffU/download?force=true&fm=jpg"
        }
        alt="generic avatar"
        className="grayscale"
      />
      <AvatarFallback>BE</AvatarFallback>
    </Avatar>
  );
}
