export const calculateAccessibilityScore = (violations) => {

  let score = 100;

  violations.forEach((violation) => {

    switch (violation.impact) {

      case "critical":
        score -= 20;
        break;

      case "serious":
        score -= 10;
        break;

      case "moderate":
        score -= 5;
        break;

      case "minor":
        score -= 2;
        break;

      default:
        break;
    }
  });

  return Math.max(score, 0);
};

export const getAccessibilityCategory = (score) => {

  if (score >= 91) return "Excellent";

  if (score >= 81) return "Good";

  if (score >= 51) return "Needs Improvement";

  return "Bad";
};