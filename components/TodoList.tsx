"use client"

import Todo from './Todo'
import { TodoType } from '@/app/(dashboard)/todos/page';

type TodoListProps = {
    todos: TodoType[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList