import { FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import { Todo } from '../../types/todo';

interface TodoListProps {
    todos: Todo[];
    changeCompleted: (todo: Todo) => void;
}

const TodoList: FC<TodoListProps> = (props) => {
    const { todos, changeCompleted } = props;

    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.item}>
                    <TodoItem todo={todo} changeCompleted={changeCompleted} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
