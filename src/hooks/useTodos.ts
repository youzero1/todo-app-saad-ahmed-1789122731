import { useEffect, useState } from 'react';
import { createTodo, parseTodos, removeTodo, toggleTodo, updateTodo } from '@/lib/todos';
import type { Todo } from '@/types/todo';

const STORAGE_KEY = 'minimal-todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window === 'undefined') return [];
    return parseTodos(window.localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (text: string) => setTodos((current) => [createTodo(text), ...current]),
    editTodo: (id: string, text: string) => setTodos((current) => current.map((todo) => todo.id === id ? updateTodo(todo, text) : todo)),
    toggle: (id: string) => setTodos((current) => current.map((todo) => todo.id === id ? toggleTodo(todo) : todo)),
    deleteTodo: (id: string) => setTodos((current) => removeTodo(current, id)),
  };
}
