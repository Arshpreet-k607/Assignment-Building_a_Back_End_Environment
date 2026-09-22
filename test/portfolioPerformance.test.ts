import expect from "expect";
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
import { describe, it } from "@jest/globals";

describe("Portfolio Performance Function", () => {

  it("should calculate profit and percentage change for a gain", () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1500;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profit).toBe(500);
    expect(result.percentageChange).toBe(50);
    expect(result.summary).toBe("Your portfolio has gained value.");
  });

  it("should calculate profit and percentage change for a loss", () => {
    // Arrange
    const initialInvestment = 2000;
    const currentValue = 1800;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profit).toBe(-200);
    expect(result.percentageChange).toBe(-10);
    expect(result.summary).toBe("Your portfolio has lost value.");
  });

  it("should return neutral summary when there is no change", () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1000;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profit).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.summary).toBe("Your portfolio value has not changed.");
  });

  it("should handle decimal values correctly", () => {
    // Arrange
    const initialInvestment = 500;
    const currentValue = 525;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profit).toBe(25);
    expect(result.percentageChange).toBe(5);
    expect(result.summary).toBe("Your portfolio has gained value.");
  });

});
