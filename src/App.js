import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
    } else {
      console.log("component was updated!");
    }
  });

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
