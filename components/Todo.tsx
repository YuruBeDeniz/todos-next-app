import { TodoType } from '@/app/(dashboard)/todos/page';
import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

type TodoProps = {
    todo: TodoType;
}
const Todo = ({ todo }: TodoProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      onClick={() => startTransition(() => completeTodo(todo.id))}
      className={`px-8 py-2 border border-black/25 cursor-pointer ${
        todo.completed 
        ? 'line-through text-black/30' 
        : ''
      }`}
    >
      {todo.content}
    </div>
  )
}

export default Todo