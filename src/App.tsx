import { Header } from './components/Header'
import { InputTaskBar } from './components/InputTaskBar'
import { TaskListContainer } from './components/TaskListContainer'
import { useState } from 'react';

type Task = {
  id: string;
  task: string;
};

export function App() {
  const [listTasks, setListTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    const uuid = crypto.randomUUID();
    const newTask: Task = {
      id: uuid,
      task: task
    };
    setListTasks([...listTasks, newTask]);
  }

  function handleRemoveTask(id: string) {
    const updatedTasks = listTasks.filter(task => task.id !== id);
    setListTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      {/* <div className="header-spacer" /> */}
      <div className="App">
        <InputTaskBar onAddTask={handleAddTask}/>
        <TaskListContainer tasks={listTasks} handleRemoveTask={handleRemoveTask}/>
      </div>
    </>
  )
}