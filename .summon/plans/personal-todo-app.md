---
status: pending
title: Clean Minimal Personal Todo App
---

1. Establish the application entry points and supported build configuration in `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, and `src/main.tsx`; configure Vite, TypeScript path aliases, TanStack Router’s file-based route plugin, and Tailwind CSS v4, with the app stylesheet imported exactly once from `src/main.tsx`. Expected outcome: the empty project has a runnable, type-safe React application foundation.

2. Create `src/styles/global.css` with the required Tailwind import and a restrained visual foundation for the clean minimal experience, including page background, readable typography, focus-visible treatment, and accessible completed-task styling without introducing a second stylesheet. Expected outcome: all routes share a consistent, accessible visual baseline.

3. Define the todo domain model and state helpers in `src/types/todo.ts` and `src/lib/todos.ts`; represent a task with a stable identifier, text, completion state, and creation metadata, and provide pure helpers for creating, updating, toggling, and removing tasks. Expected outcome: task behavior is centralized, predictable, and easy to test or extend without adding unsupported features.

4. Add the TanStack Router route tree through `src/routes/__root.tsx` and `src/routes/index.tsx`; make the root route render the application shell and the index route render the personal todo workspace. Expected outcome: the app has a single working todo URL with a shared shell and generated route tree left to the router plugin.

5. Build reusable task UI in `src/components/TodoForm.tsx`, `src/components/TodoItem.tsx`, `src/components/TodoList.tsx`, and `src/components/EmptyState.tsx`; support adding new tasks, inline or focused editing, completion toggling, deletion, keyboard submission/cancellation, labels, and accessible controls. Expected outcome: each requested task action is available through a small set of focused components with clear empty and populated states.

6. Implement the page-level state and persistence in `src/routes/index.tsx` and `src/hooks/useTodos.ts`; initialize safely from browser storage, keep updates synchronized to storage, preserve tasks across reloads, and handle malformed stored data by falling back to an empty list. Expected outcome: personal tasks remain available between sessions without introducing accounts, server APIs, or unrequested task metadata.

7. Compose the clean minimal layout in `src/routes/index.tsx` with an app title, concise task count/status summary, add-task form, task list, and responsive spacing; ensure completed tasks remain visible for direct unchecking or deletion and that the layout works on narrow and wide screens. Expected outcome: the primary todo workflow is immediately understandable and visually uncluttered.

8. Verify the implementation through the project’s TypeScript/build checks and manual interaction checks: add a task, edit it, complete and uncomplete it, delete it, reload the page to confirm persistence, submit empty/whitespace-only input, use keyboard navigation, and test the empty state. Expected outcome: the app builds cleanly and all requested actions work without adding due dates, reminders, categories, tags, priorities, search, filters, or recurring tasks.
