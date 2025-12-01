import { render, screen } from '@testing-library/react';
import ApreRoutinesTable from './ApreRoutinesTable';

describe('ApreRoutinesTable', () => {
  test('renders the table title', () => {
    render(<ApreRoutinesTable />);
    expect(screen.getByText('APRE Routines')).toBeInTheDocument();
  });

  test('renders the table description', () => {
    render(<ApreRoutinesTable />);
    expect(screen.getByText(/This table shows what your routine should look like/i)).toBeInTheDocument();
  });

  test('renders table headers', () => {
    render(<ApreRoutinesTable />);

    expect(screen.getByText('Set')).toBeInTheDocument();
    expect(screen.getByText('3RM Routine')).toBeInTheDocument();
    expect(screen.getByText('6RM Routine')).toBeInTheDocument();
    expect(screen.getByText('10RM Routine')).toBeInTheDocument();
  });

  describe('Set 0 - Warm Up', () => {
    test('renders warm up for all protocols', () => {
      render(<ApreRoutinesTable />);

      const warmUpCells = screen.getAllByText(/warm up/i);
      expect(warmUpCells).toHaveLength(3);
    });
  });

  describe('Set 1', () => {
    test('renders correct reps and percentage for 3RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('6 reps at 50% 3RM')).toBeInTheDocument();
    });

    test('renders correct reps and percentage for 6RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('10 reps at 50% 6RM')).toBeInTheDocument();
    });

    test('renders correct reps and percentage for 10RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('12 reps at 50% 10RM')).toBeInTheDocument();
    });
  });

  describe('Set 2', () => {
    test('renders correct reps and percentage for 3RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('3 reps at 75% 3RM')).toBeInTheDocument();
    });

    test('renders correct reps and percentage for 6RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('6 reps at 75% 6RM')).toBeInTheDocument();
    });

    test('renders correct reps and percentage for 10RM', () => {
      render(<ApreRoutinesTable />);
      expect(screen.getByText('10 reps at 75% 10RM')).toBeInTheDocument();
    });
  });

  describe('Set 3', () => {
    test('renders reps to failure for all protocols', () => {
      render(<ApreRoutinesTable />);

      expect(screen.getByText('Reps to failure at 3RM')).toBeInTheDocument();
      expect(screen.getByText('Reps to failure at 6RM')).toBeInTheDocument();
      expect(screen.getByText('Reps to failure at 10RM')).toBeInTheDocument();
    });
  });

  describe('Set 4', () => {
    test('renders adjusted reps to failure for all protocols', () => {
      render(<ApreRoutinesTable />);

      const adjustedCells = screen.getAllByText('Adjusted reps to failure');
      expect(adjustedCells).toHaveLength(3);
    });
  });

  test('renders exactly 5 rows (header + 5 sets)', () => {
    render(<ApreRoutinesTable />);

    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(5);
  });

  test('renders set numbers 0-4', () => {
    render(<ApreRoutinesTable />);

    expect(screen.getByRole('cell', { name: '0' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '4' })).toBeInTheDocument();
  });

  test('table has bootstrap classes applied', () => {
    const { container } = render(<ApreRoutinesTable />);

    const table = container.querySelector('.table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('table-bordered');
  });
});