import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import TodoSearch from './TodoSearch';

describe('TodoSearch', () => {
    const mockSetSearchQuery = vi.fn();

    it('renders search input', () => {
        render(<TodoSearch searchQuery="" setSearchQuery={mockSetSearchQuery} />);

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('calls setSearchQuery on input change', () => {
        render(<TodoSearch searchQuery="" setSearchQuery={mockSetSearchQuery} />);

        const input = screen.getByPlaceholderText('Search...');
        fireEvent.change(input, { target: { value: 'test' } });

        expect(mockSetSearchQuery).toHaveBeenCalledWith('test');
    });

    it('displays current search query', () => {
        render(<TodoSearch searchQuery="current" setSearchQuery={mockSetSearchQuery} />);

        expect(screen.getByPlaceholderText('Search...')).toHaveValue('current');
    });
});
