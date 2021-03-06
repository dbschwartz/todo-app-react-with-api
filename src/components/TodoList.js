import { todoListState } from "../atoms/todoListState";
import { useRecoilState } from "recoil";
import TodoItem from "./TodoItem";

function TodoList() {
  const [toDoList] = useRecoilState(todoListState);

  const listItems = toDoList.map((item, index) => (
    <TodoItem key={item.id} item={item} index={index} />
  ));

  return <ul className="todo-list">{listItems}</ul>;
}

export default TodoList;
