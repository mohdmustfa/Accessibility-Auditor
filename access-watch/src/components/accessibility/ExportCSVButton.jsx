function ExportCSVButton({ violations }) {

  const exportToCSV = () => {

    if (!violations?.length) return;

    const rows = [];

    violations.forEach((violation) => {

      violation.nodes.forEach((node) => {

        rows.push({
          id: violation.id,
          impact: violation.impact,
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
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition cursor-pointer"
    >
      Export CSV
    </button>
  );
}

export default ExportCSVButton;