export default function Skeleton() {
  return (
    <ul className="grid w-full gap-x-4 gap-y-8 grid-cols-2 p-5 xl:gap-x-8">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="relative animate-pulse">
          <div className="aspect-video h-[300] w-full overflow-hidden rounded-lg bg-gray-300"></div>
          <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600"></p>
          <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
          <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
        </li>
      ))}
    </ul>
  );
}
