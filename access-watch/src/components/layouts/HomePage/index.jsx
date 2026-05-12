import { useState } from "react";
import Header from "../Header";
import HeadingText from "../HeadingText";
import InputUrl from "../InputUrl";
import Loader from "../Loader";
import AccessibilityScore from "../../accessibility/AccessibilityScore";
import ViolationCard from "../../accessibility/ViolationCard";
import Accordion from "../../ui/Accordion";
import { scanWebsite } from "../../services/scanApi";
import ExportCSVButton from "../../accessibility/ExportCSVButton";

import {calculateAccessibilityScore, getAccessibilityCategory} from "../../utils/accessibilityScore";

function HomePage() {

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleScan = async (url) => {

    try {

      setLoading(true);

      setError("");

      setResult(null);

      const data = await scanWebsite(url);

      setResult(data);

    } catch (error) {

      (error);

      setError(
        error.response?.data?.message ||
        "Sorry, could not fetch data for this URL"
      );

    } finally {

      setLoading(false);

    }
  };

  const accessibilityScore = result
    ? calculateAccessibilityScore(result.violations)
    : 0;

  const accessibilityCategory =
    getAccessibilityCategory(accessibilityScore);

  // total issue categories
  const totalCategories = result
    ? result.violations.length
    : 0;

  // total issues count
  const totalIssues = result
    ? result.violations.reduce(
        (total, violation) =>
          total + violation.nodes.length,
        0
      )
    : 0;

  return (
     <main>
    <section className="bg-body min-h-screen">
      <HeadingText />
      <InputUrl
        onScan={handleScan}
        loading={loading}
      />

      {loading && <Loader />}

      {error && (
        <p className="text-red-600 text-sm mt-2 text-center">
          {error}
        </p>
      )}

      {result && (

        <div className="container mx-auto px-4 pb-20">

          <AccessibilityScore
            score={accessibilityScore}
            category={accessibilityCategory}
            totalCategories={totalCategories}
            totalIssues={totalIssues}
          />
          <div className="mt-10">
            
            <div className="flex fex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-extrabold mb-0">
              Accessibility Violations
            </h2>
             <div className="flex justify-end">
                <ExportCSVButton
                    violations={result.violations}
                />
                </div>
            </div>

            <div className="space-y-6">
                {result.violations.map((violation) => (

                    <Accordion
                    key={violation.id}
                    title={
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-3 w-full pr-4">

                        <div>
                            <h3 className="text-xl font-bold text-slate-800 capitalize">
                            {violation.id}
                            </h3>

                            <p className="text-sm text-slate-500 mt-1">
                            Total Affected Elements:
                            <span className="font-semibold text-slate-700 ml-1">
                                {violation.nodes.length}
                            </span>
                            </p>
                        </div>

                        <div>
                            <span
                            className={`
                                inline-flex items-center px-2 py-1 rounded-lg text-xs font-bold
                                ${
                                violation.impact === "critical"
                                    ? "bg-red-100 text-red-700"
                                    : violation.impact === "serious"
                                    ? "bg-orange-100 text-orange-700"
                                    : violation.impact === "moderate"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-blue-100 text-blue-700"
                                }
                            `}
                            >
                            Impact: {violation.impact}
                            </span>
                        </div>
                    </div>
                    }
                    >
                    <ViolationCard violation={violation} />

                    </Accordion>

                ))}

                </div>
          </div>
        </div>
      )}
    </section>
    </main>

  );
}

export default HomePage;