type CompoundingFrequency = 'monthly' | 'quarterly' | 'annually' | 'maturity';

interface CalculatorInput {
  annualRate: number;
  compounding: CompoundingFrequency;
  principal: number;
  years: number;
}

export function CalculateInterest(calculatorInput: CalculatorInput) {
  var result =
    calculatorInput.principal +
    calculatorInput.principal *
      (calculatorInput.annualRate / 100) *
      calculatorInput.years;

  return result;
}
