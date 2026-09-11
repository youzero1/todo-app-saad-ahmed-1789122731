import type { Todo } from '@/types/todo';
import { EmptyState } from '@/components/EmptyState';
import { TodoItem } from '@/components/TodoItem';

type TodoListProps = { todos: Todo[]; onToggle: (id: string) => void; onEdit: (id: string, text: string) => void; onDelete: (id: string) => void };

export function TodoList({ todos, onToggle, onEdit, onDelete }: TodoListProps) {
  if (!todos.length) return <EmptyState />;
  return <ul className="rounded-2xl border border-slate-200 bg-white px-5 shadow-[0_10px_30px_rgba(45,55,90,0.05)]">{todos.map((todo) => <TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} onEdit={(text) => onEdit(todo.id, text)} onDelete={() => onDelete(todo.id)} />)}</ul>;
}
