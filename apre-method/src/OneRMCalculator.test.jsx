import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OneRMCalculator from './OneRMCalculator';

describe('OneRMCalculator', () => {
  test('renders the calculator with all input fields', () => {
    render(<OneRMCalculator />);

    expect(screen.getByText('Max Calculator')).toBeInTheDocument();
    expect(screen.getByLabelText('Weight Lifted (lbs)')).toBeInTheDocument();
    expect(screen.getByLabelText('Repetitions Achieved')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Calculate!' })).toBeInTheDocument();
  });

  test('calculates 1RM correctly using Brzycki formula', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '200');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    // Formula: 1RM = 200 * (1 + (5 / 30)) = 200 * 1.1667 = 233.33
    const result = screen.getByLabelText('1RM');
    expect(result.value).toBe('233.33');
  });

  test('calculates 3RM correctly (91% of 1RM, rounded to 0.5)', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '200');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    // 1RM = 233.33, 3RM = 233.33 * 0.91 = 212.33, rounded to nearest 0.5 = 212.5
    const result3RM = screen.getByLabelText('3RM');
    expect(result3RM.value).toBe('212.5');
  });

  test('calculates 6RM correctly (85% of 1RM, rounded to 0.5)', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '200');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    // 1RM = 233.33, 6RM = 233.33 * 0.85 = 198.33, rounded to nearest 0.5 = 198.5
    const result6RM = screen.getByLabelText('6RM');
    expect(result6RM.value).toBe('198.5');
  });

  test('calculates 10RM correctly (75% of 1RM, rounded to 0.5)', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '200');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    // 1RM = 233.33, 10RM = 233.33 * 0.75 = 175, rounded to nearest 0.5 = 175.0
    const result10RM = screen.getByLabelText('10RM');
    expect(result10RM.value).toBe('175.0');
  });

  test('shows error message for invalid weight (zero)', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '0');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    const result = screen.getByLabelText('1RM');
    expect(result.value).toBe('Please enter valid positive numbers');
  });

  test('shows error message for invalid reps (zero)', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '200');
    await user.type(repsInput, '0');
    await user.click(calculateButton);

    const result = screen.getByLabelText('1RM');
    expect(result.value).toBe('Please enter valid positive numbers');
  });

  test('shows error message for negative weight', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '-100');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    const result = screen.getByLabelText('1RM');
    expect(result.value).toBe('Please enter valid positive numbers');
  });

  test('clears RM results when showing error message', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    // First calculate valid values
    await user.type(weightInput, '200');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    // Clear and enter invalid values
    await user.clear(weightInput);
    await user.clear(repsInput);
    await user.type(weightInput, '0');
    await user.type(repsInput, '5');
    await user.click(calculateButton);

    const result3RM = screen.getByLabelText('3RM');
    const result6RM = screen.getByLabelText('6RM');
    const result10RM = screen.getByLabelText('10RM');

    expect(result3RM.value).toBe('');
    expect(result6RM.value).toBe('');
    expect(result10RM.value).toBe('');
  });

  test('handles decimal weight inputs correctly', async () => {
    const user = userEvent.setup();
    render(<OneRMCalculator />);

    const weightInput = screen.getByLabelText('Weight Lifted (lbs)');
    const repsInput = screen.getByLabelText('Repetitions Achieved');
    const calculateButton = screen.getByRole('button', { name: 'Calculate!' });

    await user.type(weightInput, '185.5');
    await user.type(repsInput, '8');
    await user.click(calculateButton);

    // 1RM = 185.5 * (1 + (8 / 30)) = 185.5 * 1.2667 = 234.97
    const result = screen.getByLabelText('1RM');
    expect(result.value).toBe('234.97');
  });

  test('renders BasicProtocolTable component', () => {
    render(<OneRMCalculator />);

    expect(screen.getByText('APRE 3')).toBeInTheDocument();
    expect(screen.getByText('APRE 6')).toBeInTheDocument();
    expect(screen.getByText('APRE 10')).toBeInTheDocument();
  });
});