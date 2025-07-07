import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
    const mockAddTodo = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders form with input and button', () => {
        render(<TodoForm onAddTodo={mockAddTodo} />);

        expect(screen.getByPlaceholderText('Add new...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
    });

    it('calls onAddTodo with new todo when form is submitted', () => {
        render(<TodoForm onAddTodo={mockAddTodo} />);

        const input = screen.getByPlaceholderText('Add new...');
        const button = screen.getByRole('button', { name: 'Add' });

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(mockAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            title: 'New Todo',
            completed: false,
        });
        expect(input).toHaveValue('');
    });

    it('does not call onAddTodo when input is empty', () => {
        render(<TodoForm onAddTodo={mockAddTodo} />);

        const button = screen.getByRole('button', { name: 'Add' });
        fireEvent.click(button);

        expect(mockAddTodo).not.toHaveBeenCalled();
    });
});
