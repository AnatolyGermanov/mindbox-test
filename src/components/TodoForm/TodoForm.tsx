import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Todo } from '../../types/todo';
import Input from '../UI/Input/Input';
import styles from './TodoForm.module.css';

interface TodoFormProps {
    onAddTodo: (todo: Todo) => void;
}

const TodoForm: FC<TodoFormProps> = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState<string>('');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setTodoTitle(event.target.value);
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        createNewTodo();
    }

    function createNewTodo() {
        if (!todoTitle.trim()) return;

        const newTodo: Todo = { id: Date.now(), title: todoTitle, completed: false };
        onAddTodo(newTodo);
        setTodoTitle('');
    }

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <Input
                type="text"
                placeholder="Add new..."
                required
                autoFocus
                value={todoTitle}
                onChange={handleInputChange}
            />
            <button className={styles.btn}>Add</button>
        </form>
    );
};

export default TodoForm;
