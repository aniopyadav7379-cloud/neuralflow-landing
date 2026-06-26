export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--color-space)] flex items-center justify-center z-50" aria-label="Loading">
      <div className="loader-ring" />
    </div>
  );
}
