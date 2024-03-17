import { useAtom } from "jotai";
import { listTodo, todoTitle } from "./store";


export default  function Todo() {
    const [text, setText] = useAtom(todoTitle)
    const [todoList,setTodoList]=useAtom(listTodo)
    const handleChange = (e: { target: { value: string | ((prev: string) => string); }; }) => setText(e.target.value)
    function addTodo(text:string){
        setTodoList([
            ...todoList,
            {
             title:text,
             isComplete:false
            }
          ])
        setText('')
    }
  return (
  <>
   <h1>Todo app</h1>
   <input value={text} onChange={handleChange} />
   <button onClick={()=>{addTodo(text)}}>Add </button>
   <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          <span>{todo.title}</span>
          <input type="checkbox" checked={todo.isComplete} readOnly />
        </li>
      ))}
    </ul>
  </>
  );
}

