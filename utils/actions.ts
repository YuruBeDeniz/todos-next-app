"use server"
import { revalidatePath } from "next/cache";
import db from "./db";

export const newTodo = async (formData: FormData) => {
  const newTodo = formData.get('todoContent') as string

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    })
    revalidatePath('/todos')
  }
};

export const completeTodo = async (id: string) => {
    await db.todo.update({
        where: {id},
        data: {
          completed: true,
        }
    })

    revalidatePath('/todos')
}



