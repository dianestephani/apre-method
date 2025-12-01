import { render, screen } from '@testing-library/react';
import BasicProtocolTable from './BasicProtocolTable';

describe('BasicProtocolTable', () => {
  test('renders the table', () => {
    render(<BasicProtocolTable />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('displays APRE 3 protocol with correct goal', () => {
    render(<BasicProtocolTable />);

    expect(screen.getByText('APRE 3')).toBeInTheDocument();
    expect(screen.getByText('Strength/Power')).toBeInTheDocument();
  });

  test('displays APRE 6 protocol with correct goal', () => {
    render(<BasicProtocolTable />);

    expect(screen.getByText('APRE 6')).toBeInTheDocument();
    expect(screen.getByText('Strength/Hypertrophy')).toBeInTheDocument();
  });

  test('displays APRE 10 protocol with correct goal', () => {
    render(<BasicProtocolTable />);

    expect(screen.getByText('APRE 10')).toBeInTheDocument();
    expect(screen.getByText('Hypertrophy')).toBeInTheDocument();
  });

  test('renders exactly 3 rows', () => {
    render(<BasicProtocolTable />);

    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(3);
  });

  test('table has bootstrap classes applied', () => {
    const { container } = render(<BasicProtocolTable />);

    const table = container.querySelector('.table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('table-bordered');
  });
});