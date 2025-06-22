# Calculator App

A simple Term Deposit Interest Calculator built with Next.js and TypeScript.

## What it does

The calculator takes inputs:

- Start deposit amount (e.g. $10,000)
- Interest rate (e.g. 1.10%)
- Investment term (e.g. 3 years)

It then calculates compound interest with different compounding frequencies:

- Monthly compounding
- Quarterly compounding
- Annual compounding
- Simple interest (calculated at maturity)

And produces a **Final Balance** output.

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

## Design decisions

I used NextJS as the foundation for this app because it's the one I've used most in more recent years.

It's quick to set up and means you can get into dev mode fast. It comes out the box with eslint and typescript which I find enforces good practice from the get go. I also installed tailwind for some quick UI styling as the brief mentioned not too spend much time on UI.

I love using typescript as it reminds me a lot of my C# / backend days. Defining types and interfaces adds a layer of robustness that I really value when working with JS.

I'm a big fan of Next's app router and the way the file structuring works as I think this also forces developers to follow a consistent practice for file organising. If the project needs to grow, and include things like an API then NextJS makes this easy too.

For testing I used jest as this is a well supported and fairly easy test library to get up and running. I decided to keep my tests in the same folder as my lib code as I find this reads nicer and helps any new developers to pick up quickly that if they are writing any lib functions to use a test driven development approach.
