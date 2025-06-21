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
