function AccessibilityStats({
  totalCategories,
  totalIssues,
}) {

  return (
    <div className="grid grid-cols-2 gap-6">

     {/* TOTAL ISSUES */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:bg-gray-50 transition">

        <p className="text-slate-500 text-sm uppercase tracking-wide">
          Total Issues
        </p>

        <h3 className="text-5xl font-medium text-red-500 mt-3">
          {totalIssues}
        </h3>

      </div>
      {/* VIOLATION CATEGORIES */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:bg-gray-50 transition">

        <p className="text-slate-500 text-sm uppercase tracking-wide">
        Violations
        </p>

        <h3 className="text-5xl font-medium text-slate-900 mt-3">
          {totalCategories}
        </h3>

      </div>

    </div>
  );
}

export default AccessibilityStats;