import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Todo } from '../../types/todo';
import TodoStats from './TodoStats';

describe('TodoStats', () => {
    it('displays correct count of active todos', () => {
        const todos: Todo[] = [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: false },
        ];

        render(<TodoStats todos={todos} />);

        expect(screen.getByText('2 items left')).toBeInTheDocument();
    });

    it('displays 0 when no active todos', () => {
        const todos: Todo[] = [
            { id: 1, title: 'Todo 1', completed: true },
            { id: 2, title: 'Todo 2', completed: true },
        ];

        render(<TodoStats todos={todos} />);

        expect(screen.getByText('0 items left')).toBeInTheDocument();
    });
});
