
import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";

import Header from "../components/Header";
import InputTodo from "../components/InputTodo";
import TodosList from "../components/TodosList";

const MyTodos = props => {

    const [todos, setTodos] = useState(getInitialTodos())

       const handleChange = id => {
        setTodos(prevState => 
          prevState.map(todo => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo
              })
            )
          }

       const delTodo = id => {
           setTodos([
            ...todos.filter(todo => {
              return todo.id !== id;
            }),
           ])
       }

       const addTodoItem = title => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        }
        setTodos([...todos, newTodo])
      }

      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          })
        )
      }

      function getInitialTodos() {
        //get stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
      }

      useEffect(() => {
        //store todo items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
      }, [todos])

    return (
        <div className="container">
        <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
            />
        </div>
        </div>
    )
}
export default MyTodos