# APRE Method Calculator

A web-based calculator application for implementing the Autoregulatory Progressive Resistance Exercise (APRE) method, designed to help strength coaches and athletes determine optimal training weights through systematic progression.

## Overview

The APRE method is an evidence-based strength training protocol that automatically adjusts workout intensity based on performance. This application provides three key tools to implement the APRE method effectively:

1. **Max Calculator** - Calculates 1RM, 3RM, 6RM, and 10RM from any weight and rep combination
2. **APRE Routines Table** - Displays the structured 5-set protocol for each training variant
3. **APRE Adjustment Calculator** - Determines weight adjustments for subsequent sets based on reps achieved

## Features

- **Three Protocol Variants**: Choose between 3RM, 6RM, or 10RM protocols based on training goals
- **Real-time Calculations**: Instant computation of rep maxes using the Brzycki formula
- **Dynamic Weight Adjustments**: Automatically suggests weight changes based on performance
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Interface**: Bootstrap-styled UI for professional presentation

## How It Works

### Max Calculation

The application uses the Brzycki formula to estimate one-rep max:

```text
1RM = Weight × (1 + Reps/30)
```

From the 1RM, it calculates:

- **3RM**: 91% of 1RM (rounded to nearest 0.5 lb)
- **6RM**: 85% of 1RM (rounded to nearest 0.5 lb)
- **10RM**: 75% of 1RM (rounded to nearest 0.5 lb)

### APRE Protocol Structure

Each workout follows a 5-set structure:

- **Set 0**: Warm-up
- **Set 1**: 50% of working weight (6-12 reps depending on protocol)
- **Set 2**: 75% of working weight (3-10 reps depending on protocol)
- **Set 3**: 100% of working weight to failure
- **Set 4**: Adjusted weight to failure (based on Set 3 performance)

### Adjustment Logic

Based on reps achieved in Set 3, the calculator provides weight adjustments:

**3RM Protocol:**

- 1-2 reps: Decrease 5-10 lbs
- 3-4 reps: No change
- 5-6 reps: Increase 5-10 lbs
- 7+ reps: Increase 10-15 lbs

**6RM Protocol:**

- 0-2 reps: Decrease 5-10 lbs
- 3-4 reps: Decrease 0-5 lbs
- 5-7 reps: No change
- 8-12 reps: Increase 5-10 lbs
- 13+ reps: Increase 10-15 lbs

**10RM Protocol:**

- 4-6 reps: Decrease 5-10 lbs
- 7-8 reps: Decrease 0-5 lbs
- 9-11 reps: No change
- 12-16 reps: Increase 5-10 lbs
- 17+ reps: Increase 10-15 lbs

## Technology Stack

### Core Framework

- **React 19.1.1** - Component-based UI framework
- **Vite** (via Rolldown 7.1.14) - Build tool and dev server with fast HMR

### Styling

- **Bootstrap 5.3.8** - Responsive CSS framework

### Development Tools

- **ESLint 9.36.0** - Code linting and quality enforcement
- **@vitejs/plugin-react 5.0.4** - React Fast Refresh support
- **Node.js 22.21.0** - Runtime environment

### Build System

- **Rolldown-Vite** - High-performance Rust-based bundler for faster builds

## Getting Started

### Prerequisites

- Node.js 22.21.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd apre-method
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

1. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```plaintext
apre-method/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── OneRMCalculator.jsx     # Max calculator component
│   ├── ApreRoutinesTable.jsx   # Routine display component
│   ├── ApreAdjustmentCalc.jsx  # Adjustment calculator component
│   ├── BasicProtocolTable.jsx  # Protocol reference table
│   ├── main.jsx               # Application entry point
│   └── App.css                # Application styles
├── package.json               # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be output to the `dist/` directory, ready for deployment to any static hosting service.

## License

This project is private and not currently licensed for public use.

## Acknowledgments

The APRE method is based on research in autoregulatory progressive resistance exercise, designed to optimize strength training through performance-based load adjustments.
