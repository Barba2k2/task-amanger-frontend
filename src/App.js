import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      isCompleted: false,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCleanTasks = () => {
    setTasks([]);
  };

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}

      <button onClick={handleCleanTasks}>Clear tasks</button>
    </>
  );
};

export default App;
