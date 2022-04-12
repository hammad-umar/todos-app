import { useState, FormEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from '../features/todosSlice'

const Form: FC = (): JSX.Element => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>('')

  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()

    dispatch(addTodo({ id: nanoid(), title }))

    setTitle('')
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Enter todo...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit' disabled={!title}>
        Add Todo
      </button>
    </form>
  )
}

export default Form
