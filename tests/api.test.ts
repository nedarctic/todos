import { describe, it, expect } from 'vitest';
import { getTodos, postTodo } from '../lib/api';

describe('Todos API', () => {
    it('should return an empty array when there are no todos', async () => {
        const todos = await getTodos();
        expect(todos).toEqual([]);
    });

    it('should add a todo and return it', async () => {
        const newTodo = { id: 1, title: 'Test Todo' };
        const addedTodo = await postTodo(newTodo);
        expect(addedTodo).toEqual(newTodo);
    });

    it('should return the added todo in the list of todos', async () => {
        const todos = await getTodos();
        expect(todos).toContainEqual({ id: 1, title: 'Test Todo' });
    });
});