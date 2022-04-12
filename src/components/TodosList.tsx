import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { removeTodo } from '../features/todosSlice'

const TodosList: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todos)

  const renderTodos = todos.map((todo) => (
    <div className='todo' key={todo.id}>
      <h3 className='todo-title'>{todo.title}</h3>
      <button
        className='remove-button'
        type='button'
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        &times;
      </button>
    </div>
  ))

  return <div className='todos-container'>{renderTodos}</div>
}

export default TodosList
