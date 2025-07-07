import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Todo } from '../../types/todo';
import TodoList from './TodoList';

describe('TodoList', () => {
    const mockTodos: Todo[] = [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
    ];

    const mockChangeCompleted = vi.fn();

    it('renders list of todos', () => {
        render(<TodoList todos={mockTodos} changeCompleted={mockChangeCompleted} />);

        expect(screen.getByText('Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Todo 2')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    it('renders empty list when no todos', () => {
        render(<TodoList todos={[]} changeCompleted={mockChangeCompleted} />);

        expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
});
