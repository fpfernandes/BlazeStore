# BlazeStore Automation Project

This repository contains Playwright-based automation tests for the DemoBlaze e-commerce website. It includes:

- A BDD test suite using Cucumber and Gherkin
- A simple Playwright script example
- Page Object Model (POM) structure for maintainable test automation

## Project Overview

The main flow covered by the BDD suite is a complete purchase journey:

1. Log in to the store
2. Browse products by category
3. Open products and validate details
4. Add products to the cart
5. Review the cart and total amount
6. Submit an order

## Project Structure

```text
.
├── features/
│   ├── purchase_flow.feature
│   └── support/
│       ├── hooks.js
│       ├── pages/
│       │   ├── CartPage.js
│       │   ├── HeaderPage.js
│       │   ├── LoginPage.js
│       │   ├── PlaceOrderPage.js
│       │   └── ProductsPage.js
│       └── steps/
│           └── purchase_flow.steps.js
├── playwright-simple-script/
│   ├── tests/
│   │   └── product.spec.js
│   └── playwright.config.js
├── package.json
├── playwright.config.js
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- Node.js (recommended LTS)
- npm

## Installation

Install the dependencies in the root project:

```bash
npm install
```

If you also want to run the simple Playwright example inside the nested folder, install its dependencies:

```bash
cd playwright-simple-script
npm install
```

## Running the BDD Tests

From the project root:

```bash
npm run test:bdd
```

This runs the Cucumber-based test suite defined in the feature files.

## Running the Simple Playwright Example

From the nested folder:

```bash
cd playwright-simple-script
npx playwright test
```

## Browser Setup

Playwright may require browser binaries to be installed. If needed, run:

```bash
npx playwright install
```

## Test Evidence
https://drive.google.com/file/d/1Ujuep6QoVr-l3mQ95wS0auPBNeKYwSt1/view?usp=sharing

## Notes

- The tests are configured to run against the DemoBlaze website.
- Browsers are launched in non-headless mode by default in the main configuration.
- The project is intended for learning and demonstration of automated UI testing with Playwright.
