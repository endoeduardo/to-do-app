import { Header } from './components/Header'
import { InputTaskBar } from './components/InputTaskBar'

export function App() {
  return (
    <>
      <Header />
      <div className="header-spacer" />
      <div className="App">
        <InputTaskBar />
      </div>
    </>
  )
}