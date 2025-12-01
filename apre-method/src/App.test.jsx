import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders all three main components', () => {
    render(<App />);

    // Check for OneRMCalculator
    expect(screen.getByText('Max Calculator')).toBeInTheDocument();

    // Check for ApreRoutinesTable
    expect(screen.getByText('APRE Routines')).toBeInTheDocument();

    // Check for ApreAdjustmentCalc
    expect(screen.getByText('APRE Adjustment Calculator')).toBeInTheDocument();
  });

  test('renders components in correct order', () => {
    const { container } = render(<App />);

    const headings = container.querySelectorAll('h1');
    expect(headings).toHaveLength(3);
    expect(headings[0]).toHaveTextContent('Max Calculator');
    expect(headings[1]).toHaveTextContent('APRE Routines');
    expect(headings[2]).toHaveTextContent('APRE Adjustment Calculator');
  });

  test('app container has correct styling', () => {
    const { container } = render(<App />);

    const appDiv = container.firstChild;
    expect(appDiv).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    });
  });

  test('OneRMCalculator is interactive', () => {
    render(<App />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    expect(weightInput).toBeInTheDocument();
    expect(repsInput).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  test('ApreAdjustmentCalc is interactive', () => {
    render(<App />);

    const rmSelect = screen.getByLabelText('Select RM');
    const repsSelect = screen.getByLabelText('Reps Achieved');

    expect(rmSelect).toBeInTheDocument();
    expect(repsSelect).toBeInTheDocument();
  });
});