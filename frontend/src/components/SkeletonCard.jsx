export default function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="skeleton aspect-[4/3] rounded-2xl" />
      <div className="p-3">
        <div className="skeleton h-4 w-2/3 rounded-full" />
        <div className="mt-3 skeleton h-3 w-full rounded-full" />
        <div className="mt-2 skeleton h-3 w-4/5 rounded-full" />
      </div>
    </div>
  );
}