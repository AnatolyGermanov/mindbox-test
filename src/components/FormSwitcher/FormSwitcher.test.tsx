import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import FormSwitcher from './FormSwitcher';

describe('FormSwitcher', () => {
    const mockOnSwitchForm = vi.fn();

    it('renders both form buttons', () => {
        render(<FormSwitcher activeForm="add" onSwitchForm={mockOnSwitchForm} />);

        expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'search' })).toBeInTheDocument();
    });

    it('calls onSwitchForm when button is clicked', () => {
        render(<FormSwitcher activeForm="add" onSwitchForm={mockOnSwitchForm} />);

        const searchButton = screen.getByRole('button', { name: 'search' });
        fireEvent.click(searchButton);

        expect(mockOnSwitchForm).toHaveBeenCalledWith('search');
    });
});
