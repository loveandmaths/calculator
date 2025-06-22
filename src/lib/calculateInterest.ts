export type CompoundingFrequency =
  | 'monthly'
  | 'quarterly'
  | 'annually'
  | 'maturity';

interface CalculatorInput {
  annualRate: number;
  compounding: CompoundingFrequency;
  principal: number;
  years: number;
}

export function CalculateInterest(calculatorInput: CalculatorInput) {
  const annualRate = calculatorInput.annualRate / 100;
  const years = calculatorInput.years;
  const principal = calculatorInput.principal;
  let result = calculatorInput.principal;

  switch (calculatorInput.compounding) {
    case 'monthly':
      const monthlyRate = annualRate / 12;
      const totalMonths = years * 12;
      for (let i = 0; i < totalMonths; i++) {
        result += result * monthlyRate;
      }
      break;
    case 'quarterly':
      const quarterlyRate = annualRate / 4;
      const totalQuarters = years * 4;
      for (let i = 0; i < totalQuarters; i++) {
        result += result * quarterlyRate;
      }
      break;
    case 'annually':
      for (let year = 0; year < years; year++) {
        result += result * annualRate;
      }
      break;
    case 'maturity':
      result = principal + principal * annualRate * years;
      break;
    default:
      throw new Error('Unknown frequency');
  }
  return Math.round(result);
}
