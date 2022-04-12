import { FC } from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList'
import Header from './components/Header'

const App: FC = (): JSX.Element => {
  return (
    <div className='container'>
      <Header />
      <Form />
      <TodosList />
    </div>
  )
}

export default App
