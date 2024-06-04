import TodoList from '@/components/TodoList'
import db from '@/utils/db'

export type TodoType = {
  id: string;
  createdAt: Date;
  content: string;
  completed: boolean;
}

const getData = async () => {
  //await new Promise((resolve, reject) => setTimeout(() => reject(), 2000))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage