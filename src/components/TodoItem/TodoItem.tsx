import { FC, memo } from 'react';
import clsx from 'clsx';
import { Todo } from '../../types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
    todo: Todo;
    changeCompleted: (todo: Todo) => void;
}

const TodoItem: FC<TodoItemProps> = memo(({ todo, changeCompleted }) => {
    const { title, completed } = todo;

    function handleToggleComplete() {
        changeCompleted(todo);
    }

    return (
        <div className={clsx(styles.todo, { [styles.completed]: completed })}>
            <input type="checkbox" onChange={handleToggleComplete} checked={completed} />
            <span>{title}</span>
        </div>
    );
});

export default TodoItem;
