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

          <p className="text-7xl font-medium mt-6">
            <span className="text-blue-800">{score}</span>

            <span className="text-blue-500">
              /100
            </span>
          </p>

          <div className={`inline-flex items-center px-3 py-1 rounded-lg mt-3 text-sm font-bold capitalize
            ${
              category === "Excellent"
                ? "bg-green-50 text-green-700"

              : category === "Good"
                ? "bg-blue-50 text-blue-700"

              : category === "Average"
                ? "bg-yellow-50 text-orange-700"

              : category === "Poor"
                ? "bg-orange-50 text-red-700"

              : "bg-red-50 text-red-700"
            }
          `}>
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