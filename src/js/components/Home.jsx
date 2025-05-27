import React, {useState} from "react";
import Todo from "./Todo"
import TodoBody from "./TodoBody"
import TodoFooter from "./TodoFooter"
import TodoHeader from "./TodoHeader"
import rigoImage from "../../img/rigo-baby.jpg";
import { render } from "react-dom";


const Home = () => {

	const [todos, setTodos] = useState([]);

return (
	<>
	<TodoHeader todos={todos} setTodos={setTodos}/>
	</>
)
}

export default Home;