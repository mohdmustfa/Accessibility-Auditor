import AccessibilityProgress from "./AccessibilityProgress";
import AccessibilityStats from "./AccessibilityStats";

function AccessibilityScore({
  score,
  category,
  totalCategories,
  totalIssues,
}) {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 mt-8">

      <div className="grid lg:grid-cols-3 lg:gap-8 gap-5 items-center">

        {/* LEFT */}
        <AccessibilityProgress score={score} />

        {/* CENTER */}
        <div className="lg:text-start text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Accessibility Score
          </h2>

          <p className="text-7xl font-medium text-blue-600 mt-6">
            {score}

            <span className="text-blue-400">
              /100
            </span>
          </p>

          <div className="inline-flex items-center bg-orange-50 text-orange-600 px-2 py-1 rounded-lg mt-2 text-sm font-bold">
            {category}
          </div>

          <p className="text-slate-500 text-sm leading-relaxed mt-8">
            Your accessibility scan results are ready.
          </p>

        </div>

        {/* RIGHT */}
        <AccessibilityStats
          totalCategories={totalCategories}
          totalIssues={totalIssues}
        />

      </div>
    </div>
  );
}

export default AccessibilityScore;