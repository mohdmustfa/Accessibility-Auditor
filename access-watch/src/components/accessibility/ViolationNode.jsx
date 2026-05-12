import { Copy, Check } from "lucide-react";
import { useState } from "react";

function ViolationNode({ node }) {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(node.html);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {

      ( error);

    }
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-3 last:mb-0 border-gray-300">

      <div className="mb-3">

        <p className="font-semibold">

          <strong className="font-bold">
            Target Selector:
          </strong>{" "}

          <code className="text-sm text-blue-700 break-all">
            {node.target.join(", ")}
          </code>

        </p>

      </div>

      <div className="mb-3">

        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold">
            Problematic HTML
          </p>
             <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-sm text-sm font-medium transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}

          </button>
        </div>

        <pre className="relative bg-gray-900 text-green-400 p-3 rounded overflow-auto text-sm">

          <code className="bg-none text-green-400">
            {node.html}
          </code>
         
        </pre>

      </div>

      <div>

        <p className="font-semibold">
          Issue Explanation
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        {node.failureSummary
            ?.split("\n")
            .map((item) =>
            item.replace("Fix any of the following:", "").trim()
            )
            .filter((item) => item !== "")
            .map((item, index) => (

            <li key={index}>
                {item}
            </li>

            ))}

        </ul>
      </div>

    </div>
  );
}

export default ViolationNode;