'use client';

import { useState } from 'react';
import {
  CalculateInterest,
  CompoundingFrequency,
} from '@/lib/calculateInterest';

export default function Home() {
  const [principal, setPrincipal] = useState(0);
  const [annualRate, setAnnualRate] = useState(0);
  const [years, setYears] = useState(0);
  const [frequency, setFrequency] = useState<
    'monthly' | 'quarterly' | 'annually' | 'maturity'
  >('maturity');

  const [finalAmount, setFinalAmount] = useState<number | null>(null);

  const handleClick = () => {
    const result = CalculateInterest({
      principal,
      annualRate,
      years,
      compounding: frequency,
    });
    setFinalAmount(result);
  };

  return (
    <main className="pt-20 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-xl font-medium">Term Deposit Calculator</h1>

      <label className="flex flex-col">
        Start deposit amount:
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="border p-2 rounded-2xl shadow-md"
        />
      </label>

      <label className="flex flex-col">
        Interest rate (%):
        <input
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(Number(e.target.value))}
          className="border p-2 rounded-2xl shadow-md"
        />
      </label>

      <label className="flex flex-col">
        Investment term (years):
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="border p-2 rounded-2xl shadow-md"
        />
      </label>

      <label className="flex flex-col">
        Interest paid:
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as CompoundingFrequency)}
          className="border p-2 rounded-2xl shadow-md"
        >
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
          <option value="maturity">At Maturity</option>
        </select>
      </label>

      <button
        className="bg-black text-white rounded-2xl p-3"
        onClick={handleClick}
      >
        Calculate
      </button>

      {finalAmount}
    </main>
  );
}
