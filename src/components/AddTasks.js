import React, { Component } from 'react'
import '../App.css';
import { faPlusCircle, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddTasks extends Component {

    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    updateInputTodo = (e) => {

      this.setState({task : e.target.value});

    }

    addTask = (e) =>{
        e.preventDefault();
        this.props.addTodoList(this.state.task);
        document.getElementById('inputID').value=''; 
        //  empty input after submit a task

    }

    render() {
        return (
            
        <div className="textFieldArea">
        {/* <span><FontAwesomeIcon icon={faSmileWink}/></span> */}
        <form onSubmit={(e) => this.addTask(e)}>
        <input id="inputID" className="inputTodo" onChange={(e) => this.updateInputTodo(e)}></input>
        <button className="addBtn" type="submit"><FontAwesomeIcon icon={faPlusCircle} size="5x" className="" /></button>
        </form>
        </div>
            
        )
    }
}

export default AddTasks
