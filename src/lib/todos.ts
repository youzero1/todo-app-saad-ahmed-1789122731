import type { Todo } from '@/types/todo';

export function createTodo(text: string): Todo {
  return { id: crypto.randomUUID(), text: text.trim(), completed: false, createdAt: Date.now() };
}

export function updateTodo(todo: Todo, text: string): Todo {
  return { ...todo, text: text.trim() };
}

export function toggleTodo(todo: Todo): Todo {
  return { ...todo, completed: !todo.completed };
}

export function removeTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}

export function parseTodos(value: string | null): Todo[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is Todo => {
      if (!item || typeof item !== 'object') return false;
      const candidate = item as Record<string, unknown>;
      return typeof candidate.id === 'string' && typeof candidate.text === 'string' && typeof candidate.completed === 'boolean' && typeof candidate.createdAt === 'number';
    });
  } catch { return []; }
}
