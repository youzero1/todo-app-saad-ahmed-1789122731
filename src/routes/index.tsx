import { createFileRoute } from '@tanstack/react-router';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import { useTodos } from '@/hooks/useTodos';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  const { todos, addTodo, editTodo, toggle, deleteTodo } = useTodos();
  const remaining = todos.filter((todo) => !todo.completed).length;
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">Daily focus</span>
            <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800">{remaining} {remaining === 1 ? 'task' : 'tasks'} remaining</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#172033] sm:text-5xl">A little more<br /><span className="text-blue-600">done today.</span></h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-500">Keep your priorities close, make progress visible, and leave the rest for tomorrow.</p>
        </header>
        <TodoForm onAdd={addTodo} />
        <section aria-label="Your tasks" className="mt-8"><TodoList todos={todos} onToggle={toggle} onEdit={editTodo} onDelete={deleteTodo} /></section>
        <footer className="mt-10 text-center text-xs text-slate-400">Simple lists. Steady progress.</footer>
      </div>
    </main>
  );
}
