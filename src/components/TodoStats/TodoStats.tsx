import { FC } from 'react';
import { Todo } from '../../types/todo';

interface TodoStatsProps {
    todos: Todo[];
}

const TodoStats: FC<TodoStatsProps> = ({ todos }) => {
    const leftTodosCount = todos.reduce((sum, todo) => (!todo.completed ? sum + 1 : sum), 0);

    return <span>{leftTodosCount} items left</span>;
};

export default TodoStats;
