import { useState, type FormEvent } from 'react';

type TodoFormProps = { onAdd: (text: string) => void };

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText('');
  }
  return (
    <form onSubmit={submit} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_30px_rgba(45,55,90,0.06)]">
      <label htmlFor="new-todo" className="sr-only">Add a task</label>
      <input id="new-todo" value={text} onChange={(event) => setText(event.target.value)} placeholder="What needs to be done?" className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none" />
      <button type="submit" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50" disabled={!text.trim()}>Add task</button>
    </form>
  );
}
