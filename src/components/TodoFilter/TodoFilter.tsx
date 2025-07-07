import { FC } from 'react';
import { FilterType } from '../../types/todo';
import Button from '../UI/Button/Button';
import styles from './TodoFilter.module.css';

interface TodoFilterProps {
    filterType: FilterType;
    setFilterType: (type: FilterType) => void;
}

const FILTER_OPTIONS: FilterType[] = ['all', 'active', 'completed'];

const TodoFilter: FC<TodoFilterProps> = ({ filterType, setFilterType }) => {
    return (
        <div className={styles.filter}>
            {FILTER_OPTIONS.map((option) => (
                <Button
                    key={option}
                    active={filterType === option}
                    onClick={() => setFilterType(option)}
                >
                    {option}
                </Button>
            ))}
        </div>
    );
};

export default TodoFilter;
