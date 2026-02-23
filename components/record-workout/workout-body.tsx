export default function WorkoutBody() {
  return (
    <div className="my-4 grid grid-cols-1 gap-y-3">
      <div className="text-neutral-500 uppercase flex items-baseline justify-between">
        <p>Satz</p>
        <p>Vorherige</p>
        <p>KG</p>
        <p>WDH</p>
        <div className="w-[24px]"></div>
      </div>
      <div>Sets</div>
      <div>Sets 2</div>
    </div>
  );
}
