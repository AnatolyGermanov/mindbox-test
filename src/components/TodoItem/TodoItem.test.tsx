import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Todo } from '../../types/todo';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
    const mockTodo: Todo = {
        id: 1,
        title: 'Test Todo',
        completed: false,
    };

    const mockChangeCompleted = vi.fn();

    it('renders todo item correctly', () => {
        render(<TodoItem todo={mockTodo} changeCompleted={mockChangeCompleted} />);

        expect(screen.getByText('Test Todo')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('calls changeCompleted when checkbox is clicked', () => {
        render(<TodoItem todo={mockTodo} changeCompleted={mockChangeCompleted} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(mockChangeCompleted).toHaveBeenCalledWith(mockTodo);
    });

    it('applies completed style when todo is completed', () => {
        const completedTodo = { ...mockTodo, completed: true };
        render(<TodoItem todo={completedTodo} changeCompleted={mockChangeCompleted} />);

        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});
