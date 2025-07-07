import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders initial todos', () => {
        render(<App />);

        expect(screen.getByText('Learn Javascript')).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a React App')).toBeInTheDocument();
    });

    it('adds new todo', () => {
        render(<App />);

        const input = screen.getByPlaceholderText('Add new...');
        const button = screen.getByRole('button', { name: 'Add' });

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    it('filters todos', () => {
        render(<App />);

        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);

        const activeButton = screen.getByRole('button', { name: 'active' });
        fireEvent.click(activeButton);

        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a React App')).toBeInTheDocument();
        expect(screen.queryByText('Learn Javascript')).not.toBeInTheDocument();
    });

    it('searches todos', () => {
        render(<App />);

        const searchButton = screen.getByRole('button', { name: 'search' });
        fireEvent.click(searchButton);

        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'React' } });

        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.queryByText('Learn Javascript')).not.toBeInTheDocument();
    });

    it('clears completed todos', () => {
        render(<App />);

        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);

        const clearButton = screen.getByRole('button', { name: 'Clear completed' });
        fireEvent.click(clearButton);

        expect(screen.queryByText('Learn Javascript')).not.toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });
});
