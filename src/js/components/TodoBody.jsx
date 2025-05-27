import React, {useState} from "react"


const TodoBody = ({todos, setTodos}) => {
    const deleteTodo = () => {}

    //return ("Rendered todos")     
    const renderTodos = todos.map((tasklist => {
         (<ul>
            <li className="todo-item" key={tasklist.id}>
            </li></ul>
        )
    }))

const updatedTodos = todos.filter((todo)=> todo.counter != counter)
    setTodos(updatedTodos)

    return (
        <>
        <section className="main">
        <ul className="todo-list">
        {todos.length !== 0 ?  renderTodos : "No task. Add a task."}
        </ul>

        </section>
        </>
    )
}


export default TodoBody;