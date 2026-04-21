const StatsBar = ({ total, active, done }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: "Total", value: total, color: "text-white" },
          { label: "Active", value: active, color: "text-amber-400" },
          { label: "Completed", value: done, color: "text-emerald-400" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center"
          >
            <div className={`text-3xl font-bold ${color}`}>{value}</div>
            <div className="text-slate-500 text-xs mt-1 font-medium">
              {label}
            </div>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="mb-8 bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{Math.round((done / total) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-700"
              style={{ width: `${(done / total) * 100}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StatsBar;
