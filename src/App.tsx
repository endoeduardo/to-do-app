import { Header } from './components/Header'
import { InputTaskBar } from './components/InputTaskBar'
import { TaskListContainer } from './components/TaskListContainer'

export function App() {
  return (
    <>
      <Header />
      {/* <div className="header-spacer" /> */}
      <div className="App">
        <InputTaskBar />
        <TaskListContainer />
      </div>
    </>
  )
}