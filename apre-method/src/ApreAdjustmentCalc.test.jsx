import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApreAdjustmentCalc from './ApreAdjustmentCalc';

describe('ApreAdjustmentCalc', () => {
  test('renders the calculator with default selections', () => {
    render(<ApreAdjustmentCalc />);

    expect(screen.getByText('APRE Adjustment Calculator')).toBeInTheDocument();
    expect(screen.getByLabelText('Select RM')).toBeInTheDocument();
    expect(screen.getByLabelText('Reps Achieved')).toBeInTheDocument();
    expect(screen.getByLabelText('Adjustment')).toBeInTheDocument();
  });

  test('defaults to 3RM selection', () => {
    render(<ApreAdjustmentCalc />);

    const rmSelect = screen.getByLabelText('Select RM');
    expect(rmSelect.value).toBe('3RM');
  });

  describe('3RM Protocol', () => {
    test('shows correct adjustment for 1-2 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '1-2');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Decrease by 5-10#');
    });

    test('shows correct adjustment for 3-4 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '3-4');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Weight stays the same');
    });

    test('shows correct adjustment for 5-6 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '5-6');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase by 5-10#');
    });

    test('shows correct adjustment for 7+ reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '7+');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase by 10-15#');
    });
  });

  describe('6RM Protocol', () => {
    test('shows correct adjustment for 0-2 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '6RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '0-2');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Decrease by 5-10#');
    });

    test('shows correct adjustment for 3-4 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '6RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '3-4');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Decrease by 0-5#');
    });

    test('shows correct adjustment for 5-7 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '6RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '5-7');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Weight stays the same');
    });

    test('shows correct adjustment for 8-12 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '6RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '8-12');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase by 5-10#');
    });

    test('shows correct adjustment for 13+ reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '6RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '13+');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase by 10-15#');
    });
  });

  describe('10RM Protocol', () => {
    test('shows correct adjustment for 4-6 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '10RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '4-6');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Decrease by 5-10#');
    });

    test('shows correct adjustment for 7-8 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '10RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '7-8');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Decrease by 0-5#');
    });

    test('shows correct adjustment for 9-11 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '10RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '9-11');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Weight stays the same');
    });

    test('shows correct adjustment for 12-16 reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '10RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '12-16');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase by 5-10#');
    });

    test('shows correct adjustment for 17+ reps', async () => {
      const user = userEvent.setup();
      render(<ApreAdjustmentCalc />);

      const rmSelect = screen.getByLabelText('Select RM');
      await user.selectOptions(rmSelect, '10RM');

      const repsSelect = screen.getByLabelText('Reps Achieved');
      await user.selectOptions(repsSelect, '17+');

      const adjustmentInput = screen.getByLabelText('Adjustment');
      expect(adjustmentInput.value).toBe('Increase 10-15#');
    });
  });

  test('resets range selection when changing RM type', async () => {
    const user = userEvent.setup();
    render(<ApreAdjustmentCalc />);

    const rmSelect = screen.getByLabelText('Select RM');
    const repsSelect = screen.getByLabelText('Reps Achieved');

    // Select a range for 3RM
    await user.selectOptions(repsSelect, '3-4');
    expect(screen.getByLabelText('Adjustment').value).toBe('Weight stays the same');

    // Change to 6RM - should reset range
    await user.selectOptions(rmSelect, '6RM');
    expect(repsSelect.value).toBe('');
    expect(screen.getByLabelText('Adjustment').value).toBe('');
  });

  test('shows placeholder text when no range is selected', () => {
    render(<ApreAdjustmentCalc />);

    const adjustmentInput = screen.getByLabelText('Adjustment');
    expect(adjustmentInput.placeholder).toBe('Select options above');
    expect(adjustmentInput.value).toBe('');
  });

  test('adjustment input is read-only', () => {
    render(<ApreAdjustmentCalc />);

    const adjustmentInput = screen.getByLabelText('Adjustment');
    expect(adjustmentInput).toHaveAttribute('readOnly');
  });
});