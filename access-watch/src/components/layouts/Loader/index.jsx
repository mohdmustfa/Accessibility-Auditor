function Loader({ currentStep, steps }) {

  return (

    <div className="flex flex-col items-center justify-center pb-10">

      {/* Spinner */}
      <div className="w-6 h-6 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin mb-6"></div>

      {/* Loading Steps */}
      <div className="space-y-3 w-full max-w-md">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-1"
          >

            {/* Status Icon */}
            <div className="text-lg">

              {index < currentStep && (
                <span className="text-green-600">
                  ✔
                </span>
              )}

              {index === currentStep && (
                <span className="text-blue-600 animate-pulse">
                  ⏳
                </span>
              )}

              {index > currentStep && (
                <span className="text-slate-400">
                  ○
                </span>
              )}

            </div>

            {/* Step Text */}
            <p
              className={`
                text-sm font-medium transition-all duration-300
                ${
                  index === currentStep
                    ? "text-slate-900"
                    : "text-slate-500"
                }
              `}
            >
              {step}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Loader;