import { TodoType } from '@/app/(dashboard)/todos/page';

type TodoProps = {
    todo: TodoType;
}
const Todo = ({ todo }: TodoProps) => {
  return (
    <div>{todo.content}</div>
  )
}

export default Todo