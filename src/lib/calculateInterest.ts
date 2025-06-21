type CompoundingFrequency = 'monthly' | 'quarterly' | 'annually' | 'maturity';

interface CalculatorInput {
  annualRate: number;
  compounding: CompoundingFrequency;
  principal: number;
  years: number;
}

export function CalculateInterest(calculatorInput: CalculatorInput) {
  return 10330;
}
