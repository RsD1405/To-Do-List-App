import { useState } from "react";

function ToDoListContainer()
{
    const [taskList, setTaskList] = useState([
        {task: "Bring items from home", completed: false},
        {task: "DCLD Assignment", completed: true}
    ]);
    const [task, setTask] = useState("");
    const [completed, setCompleted] = useState(false);

    function addTask(){
        const newTask = {
            task: task,
            completed: completed
        };
        if(task!=="")setTaskList(tl => [...tl, newTask]);
        setTask("");
        setCompleted(false);
    }
    function changeTask(event){
        setTask(event.target.value);
    }
    function toggleCompleted(index){
        setTaskList(taskList.map((item, i) =>
        (i===index)?{...item, completed: !item.completed}:item
        ));
    }
    function deleteTask(index){
        setTaskList(taskList.filter((_, i) => i!==index));
    }

    return(
        <>
        <h1 id="appTitle">To Do List App</h1>
        <div id="inputContainer">
            <input
            id="taskInput"
            type="text"
            value={task}
            placeholder="Enter task here.."
            onChange={changeTask}
            ></input>
            <button
            id="addButton"
            onClick={addTask}
            >Add Task</button>
        </div>
        <div id="listContainer">
            {taskList.map((task, index) =>
            <div className="taskDiv" key={index}>
                <label>{task.task}</label>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={e => toggleCompleted(index)}
                ></input>
                <button
                id="taskDeleteButton"
                onClick={e => deleteTask(index)}
                >Delete</button>
            </div>
            )}
        </div>
        </>
    )
}

export default ToDoListContainer