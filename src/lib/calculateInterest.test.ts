import { CalculateInterest } from '@/lib/calculateInterest';

describe('CalculateInterest', () => {
  it('calculates compound interest at maturity', () => {
    const result = CalculateInterest({
      principal: 10000,
      annualRate: 1.1,
      compounding: 'maturity',
      years: 3,
    });

    expect(result).toBeCloseTo(10330, 2);
  });
});

describe('CalculateInterest', () => {
  it('calculates compound interest monthly', () => {
    const result = CalculateInterest({
      principal: 20000,
      annualRate: 1.8,
      compounding: 'monthly',
      years: 4,
    });

    expect(result).toBeCloseTo(21492, 2);
  });
});

describe('CalculateInterest', () => {
  it('calculates compound interest quarterly', () => {
    const result = CalculateInterest({
      principal: 10000,
      annualRate: 1.1,
      compounding: 'quarterly',
      years: 3,
    });

    expect(result).toBeCloseTo(10335, 2);
  });
});

describe('CalculateInterest', () => {
  it('calculates compound interest annually', () => {
    const result = CalculateInterest({
      principal: 10000,
      annualRate: 1.1,
      compounding: 'annually',
      years: 3,
    });

    expect(result).toBeCloseTo(10334, 2);
  });
});
