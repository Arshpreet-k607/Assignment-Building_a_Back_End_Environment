export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
) {
  const profit = currentValue - initialInvestment;
  const percentageChange = (profit / initialInvestment) * 100;

  return {
    initialInvestment,
    currentValue,
    profit,
    percentageChange,
    summary:
      percentageChange > 0
        ? "Your portfolio has gained value."
        : percentageChange < 0
        ? "Your portfolio has lost value."
        : "Your portfolio value has not changed."
  };
}
