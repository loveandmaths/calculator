# Calculator App

A simple Term Deposit Interest Calculator built with Next.js and TypeScript.

## What it does

Calculates compound interest with different compounding frequencies:

- Monthly compounding
- Quarterly compounding
- Annual compounding
- Simple interest (calculated at maturity)

## Getting started

Install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Running tests

I've got some tests set up to make sure the maths is correct:

```bash
npm test
```

The tests run automatically before building to catch any issues.

I used https://www.bendigobank.com.au/business/tools-and-calculators/savings-and-deposit-calculator/ as the source of truth for these tests

## Built with

- Next.js 15
- TypeScript
- Jest for testing
- Tailwind CSS for styling
