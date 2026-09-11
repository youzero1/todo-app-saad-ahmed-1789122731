import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import type { Todo } from '@/types/todo';

type TodoItemProps = { todo: Todo; onToggle: () => void; onEdit: (text: string) => void; onDelete: () => void };

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);
  function save() { const value = text.trim(); if (value) onEdit(value); else setText(todo.text); setEditing(false); }
  function keyDown(event: KeyboardEvent<HTMLInputElement>) { if (event.key === 'Enter') save(); if (event.key === 'Escape') { setText(todo.text); setEditing(false); } }
  return (
    <li className="group flex items-center gap-3 border-b border-slate-100 py-4 last:border-0">
      <button type="button" aria-label={todo.completed ? `Mark ${todo.text} incomplete` : `Complete ${todo.text}`} onClick={onToggle} className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition ${todo.completed ? 'border-[#5463d8] bg-[#5463d8] text-white' : 'border-slate-300 hover:border-[#5463d8]'}`}>
        {todo.completed && <span className="text-sm leading-none">✓</span>}
      </button>
      {editing ? <input ref={inputRef} value={text} onChange={(event) => setText(event.target.value)} onBlur={save} onKeyDown={keyDown} aria-label="Edit task" className="min-w-0 flex-1 rounded-lg border border-[#aeb7f4] px-2 py-1 text-[15px] outline-none" /> : <button type="button" onClick={() => setEditing(true)} className={`min-w-0 flex-1 text-left text-[15px] ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{todo.text}</button>}
      <div className="flex shrink-0 gap-1 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
        <button type="button" aria-label={`Edit ${todo.text}`} onClick={() => setEditing(true)} className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-400 hover:bg-slate-100 hover:text-[#5463d8]">Edit</button>
        <button type="button" aria-label={`Delete ${todo.text}`} onClick={onDelete} className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-400 hover:bg-rose-50 hover:text-rose-500">Delete</button>
      </div>
    </li>
  );
}
