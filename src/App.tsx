import { Header } from './components/Header'
import { InputTaskBar } from './components/InputTaskBar'
import { TaskListContainer } from './components/TaskListContainer'
import { useState } from 'react';

type Task = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export function App() {
  const [listTasks, setListTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    const uuid = crypto.randomUUID();
    const newTask: Task = {
      id: uuid,
      task: task,
      isCompleted: false
    };
    setListTasks([...listTasks, newTask]);
  }

  function handleRemoveTask(id: string) {
    const updatedTasks = listTasks.filter(task => task.id !== id);
    setListTasks(updatedTasks);
  }

  function onCompletion(id: string) {
    const updatedTasks = listTasks.map(task => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    console.log(updatedTasks);
    setListTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      {/* <div className="header-spacer" /> */}
      <div className="App">
        <InputTaskBar onAddTask={handleAddTask}/>
        <TaskListContainer tasks={listTasks} handleRemoveTask={handleRemoveTask} onCompletion={onCompletion}/>
      </div>
    </>
  )
}