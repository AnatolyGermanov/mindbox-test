export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';
export type FormType = 'add' | 'search';
