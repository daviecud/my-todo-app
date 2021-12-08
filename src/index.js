import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"
//import "./functionBased/AboutApp.css"
import "./functionBased/components/TodoItem.module.css"
import MyTodos from "./functionBased/pages/MyTodos";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <MyTodos /> 
        </Router>
    </React.StrictMode>,
document.getElementById("root")
)
