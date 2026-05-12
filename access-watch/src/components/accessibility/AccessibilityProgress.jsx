import { Accessibility } from "lucide-react";

function AccessibilityProgress({ score }) {

  const radius = 120;

  const strokeWidth = 14;

  const normalizedRadius = radius - strokeWidth * 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">

      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >

        {/* Background Circle */}
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle */}
        <circle
          stroke="#155dfc"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>

      {/* CENTER CONTENT */}
      <div className="absolute flex flex-col items-center">
        <span className="text-7xl font-bold text-slate-900">
          {score}
        </span>
        <p className="text-lg text-slate-500 mt-2">
          Out of 100
        </p>

      </div>
    </div>
  );
}

export default AccessibilityProgress;