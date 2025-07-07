import { FC } from 'react';
import Input from '../UI/Input/Input';
import styles from './TodoSearch.module.css';

interface TodoSearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const TodoSearch: FC<TodoSearchProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <Input
                type="text"
                placeholder="Search..."
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    );
};

export default TodoSearch;
