import {FileSpreadsheet} from "lucide-react";
function ExportCSVButton({ violations }) {

  const exportToCSV = () => {

    if (!violations?.length) return;

    const rows = [];

    violations.forEach((violation) => {

      violation.nodes.forEach((node) => {

        rows.push({
          id: violation.id,

          impact: violation.impact,

          wcagLevel:
            violation.tags.find(tag =>
              tag.includes("wcag2")
            ) || "",

          successCriteria:
            violation.tags
              .filter(tag =>
                /^wcag\d+$/.test(tag)
              )
              .join(", "),

          description: violation.description,

          help: violation.help,

          helpUrl: violation.helpUrl,

          target: node.target.join(", "),

          html: node.html,

          failureSummary: node.failureSummary,
        });

      });

    });

    const headers = Object.keys(rows[0]);

    const csvContent = [
      headers.join(","),

      ...rows.map((row) =>
        headers
          .map((header) =>
            `"${String(row[header] || "")
              .replace(/"/g, '""')}"`
          )
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute(
      "download",
      "accessibility-report.csv"
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <button
      onClick={exportToCSV}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition cursor-pointer flex items-center"
    >
      <FileSpreadsheet /> <span className="block">Export CSV</span>
    </button>
  );
}

export default ExportCSVButton;