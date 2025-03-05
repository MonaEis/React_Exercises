type ToDoListProps = {
    toDoPoint:string;
}

const ToDoListItems = (props: ToDoListProps) => {
  return (
    <div>
      <ul>
        <li>{props.toDoPoint}</li>
      </ul>
    </div>
  )
}

export default ToDoListItems

