import React, { useMemo, useState } from 'react';
import styles from './App.module.css';
import FormSwitcher from './components/FormSwitcher/FormSwitcher';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoStats from './components/TodoStats/TodoStats';
import Button from './components/UI/Button/Button';
import './styles/styles.css';
import { FilterType, FormType, Todo } from './types/todo';

const initialTodos: Todo[] = [
    { id: 1, title: 'Learn Javascript', completed: false },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Build a React App', completed: false },
];

function App() {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterType, setFilterType] = useState<FilterType>('all');

    const searchedTodos = useMemo(() => {
        return todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [todos, searchQuery]);

    const searchedAndFilteredTodos = useMemo(() => {
        return searchedTodos.filter((todo) => {
            if (filterType === 'active') {
                return !todo.completed;
            }
            if (filterType === 'completed') {
                return todo.completed;
            }
            return true;
        });
    }, [searchedTodos, filterType]);

    function handleAddTodo(todo: Todo) {
        setTodos([...todos, todo]);
    }

    function changeCompleted(todo: Todo) {
        const changedTodos = todos.map<Todo>((t) =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
        );

        setTodos(changedTodos);
    }

    const FORMS: Record<FormType, React.ReactNode> = {
        add: <TodoForm onAddTodo={handleAddTodo} />,
        search: <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />,
    };

    const [formType, setFormType] = useState<FormType>('add');

    function changeFormType(state: FormType) {
        setFormType(state);
    }

    function clearCompletedTodos() {
        const activeTodos = todos.filter((todo) => !todo.completed);

        setTodos(activeTodos);
    }

    return (
        <div className="App">
            <div className={styles.todos}>
                <h2 className={styles.title}>Things to do</h2>
                <div className={styles.body}>
                    {FORMS[formType]}

                    {searchedAndFilteredTodos.length ? (
                        <TodoList
                            todos={searchedAndFilteredTodos}
                            changeCompleted={changeCompleted}
                        />
                    ) : (
                        <p>No tasks found</p>
                    )}
                </div>
                <div className={styles.footer}>
                    <FormSwitcher activeForm={formType} onSwitchForm={changeFormType} /> |
                    <TodoStats todos={todos} />
                    <div className={styles.filter}>
                        <TodoFilter filterType={filterType} setFilterType={setFilterType} />
                    </div>
                    <div>
                        <Button onClick={clearCompletedTodos}>Clear completed</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
