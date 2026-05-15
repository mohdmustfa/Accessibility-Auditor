import { ShieldCheck, Gauge, Code2 } from "lucide-react";

function AboutPage() {
  return (
    <main>
        <section className="min-h-screen py-16 px-6 bg-body">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Access Watch
          </h1>

          <p className="text-lg text-gray-600">
            Access Watch is a website accessibility auditing tool designed
            to help developers identify and fix accessibility issues using
            automated WCAG-based testing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-3 text-blue-600">
              <span className="bg-blue-600 rounded-lg p-2 inline-flex align-top"> <ShieldCheck color="white"/> </span>  WCAG Audits
            </h2>

            <p className="text-gray-600">
              Scan websites for accessibility violations based on WCAG
              guidelines and industry best practices.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-3 text-blue-600">
              <span className="bg-blue-600 rounded-lg p-2 inline-flex align-top"> <Gauge color="white"/> </span> Accessibility Score
            </h2>

            <p className="text-gray-600">
              Get an accessibility score along with categorized issue reports
              and impact levels.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-3 text-blue-600">
              <span className="bg-blue-600 rounded-lg p-2 inline-flex align-top"> <Code2 color="white"/> </span> Developer Friendly
            </h2>

            <p className="text-gray-600">
              View affected elements, issue explanations, and actionable
              accessibility insights for faster debugging.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-14 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Why Accessibility Matters?
          </h2>

          <p className="text-gray-600 leading-7">
            Web accessibility ensures that websites are usable by people
            with disabilities, including users relying on screen readers,
            keyboard navigation, and assistive technologies. Creating
            accessible experiences improves usability, inclusivity, SEO,
            and overall product quality.
          </p>
        </div>

      </div>
    </section>
    </main>
  );
}

export default AboutPage;