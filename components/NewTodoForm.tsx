import { newTodo } from "@/utils/actions"

const NewTodoForm = () => {
    
  return (
    <div>
      <form action={newTodo}>
        <input name="todoContent" type='text' className='border border-black/25' />
        <button type="submit">new todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm