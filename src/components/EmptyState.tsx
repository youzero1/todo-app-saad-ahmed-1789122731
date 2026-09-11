export function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 px-6 py-12 text-center">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-xl text-red-600">✦</div>
      <p className="text-sm font-semibold text-slate-600">A clear list is a clear mind.</p>
      <p className="mt-1 text-sm text-slate-400">Add your first task above to get started.</p>
    </div>
  );
}
