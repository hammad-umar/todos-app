import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

interface IActionPayload {
  id: string
  title: string
}

interface ITodosState {
  todos: {
    id: string
    title: string
  }[]
}

const initialState: ITodosState = {
  todos: [
    {
      id: nanoid(),
      title: 'Buy Clothes',
    },
    {
      id: nanoid(),
      title: 'Wash Dishes',
    },
    {
      id: nanoid(),
      title: 'Buy Clock',
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<IActionPayload>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
