import { createFileRoute } from '@tanstack/react-router';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useTodos } from '@/hooks/useTodos';
import { useTheme } from '@/hooks/useTheme';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  const { todos, addTodo, editTodo, toggle, deleteTodo } = useTodos();
  const { theme, setTheme } = useTheme();
  const remaining = todos.filter((todo) => !todo.completed).length;
  return (
    <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Daily focus</span>
            <ThemeSwitcher theme={theme} onChange={setTheme} />
          </div>
          <div className="mb-6">
            <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-strong)]">{remaining} {remaining === 1 ? 'task' : 'tasks'} remaining</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#172033] sm:text-5xl">A little more<br /><span className="text-[var(--accent)]">done today.</span></h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-500">Keep your priorities close, make progress visible, and leave the rest for tomorrow.</p>
        </header>
        <TodoForm onAdd={addTodo} />
        <section aria-label="Your tasks" className="mt-8"><TodoList todos={todos} onToggle={toggle} onEdit={editTodo} onDelete={deleteTodo} /></section>
        <footer className="mt-10 text-center text-xs text-slate-400">Simple lists. Steady progress.</footer>
      </div>
    </main>
  );
}
