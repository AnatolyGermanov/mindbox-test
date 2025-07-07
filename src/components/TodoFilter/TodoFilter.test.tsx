import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import TodoFilter from './TodoFilter';

describe('TodoFilter', () => {
    const mockSetFilterType = vi.fn();

    it('renders all filter buttons', () => {
        render(<TodoFilter filterType="all" setFilterType={mockSetFilterType} />);

        expect(screen.getByRole('button', { name: 'all' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'active' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'completed' })).toBeInTheDocument();
    });

    it('calls setFilterType when button is clicked', () => {
        render(<TodoFilter filterType="all" setFilterType={mockSetFilterType} />);

        const activeButton = screen.getByRole('button', { name: 'active' });
        fireEvent.click(activeButton);

        expect(mockSetFilterType).toHaveBeenCalledWith('active');
    });
});
