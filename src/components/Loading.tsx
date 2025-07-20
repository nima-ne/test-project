
export default function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2 text-amber-600 text-lg font-semibold py-4">
      <span className="animate-spin text-2xl">⏳</span>
      <p> Getting Data ...</p>
    </div>
  );
}
