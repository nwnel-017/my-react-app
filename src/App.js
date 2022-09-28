import logo from './logo.svg';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 2,
      "text": "go to school",
      "day": "Monday",
      "reminder": true
    },
    {
      "text": "Take Test",
      "day": "Monday",
      "reminder": true,
      "id": 3
    },
    {
      "text": "Walk Dog",
      "day": "Saturday",
      "reminder": true,
      "id": 4
    }
  ])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])

  // //Fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   console.log(data)

  //   return data
  // }

  // //Fetch task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   console.log(data)

  //   return data
  // }

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}
// const addTask = async (task) => {
//   const res = await fetch('http://localhost:5000/tasks', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(task)
//   })

  // const data = await res.json()

  // setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 1000) + 1
  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
//}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
// const deleteTask = async (id) => {
//   await fetch(`http://localhost:5000/tasks/${id}`, {
//     method: 'DELETE'
//   })

//   setTasks(tasks.filter((task) => task.id !== id))
//   console.log('deledte my task')
// }

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id == id ? {...task, reminder:
      !task.reminder } : task 
    )
  )
}

// const toggleReminder = async (id) => {
//   const taskToToggle = await fetchTask(id)
//   const updTask = { ...taskToToggle,
//   reminder: !taskToToggle.reminder }

//   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//     method:'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(updTask)
//   })

//   const data = await res.json()

//   setTasks(tasks.map((task) => task.id === id ? 
//   { ...task, reminder: data.reminder } : task))
// }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete = {deleteTask} onToggle={toggleReminder}/> : 'No Tasks for You'}
    </div>
  );
}

export default App
