import ToDoListItems from "../ToDoListItems/ToDoListItems"

const myTodos =  ["Buy Grocerys", "Send Email", "Finish Assignment", "Write Blog", "Bake Cake"];

const ToDoList = () => {
  return (
    <div>
      <h1>My Todos</h1>
      {myTodos.map((singleToDo) => (
        <ToDoListItems toDoPoint={singleToDo}
        />
      ))}
    </div>
  )
}

export default ToDoList
