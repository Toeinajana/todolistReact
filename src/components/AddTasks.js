import React, { Component } from 'react'
import '../App.css';
import { faPlusCircle, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddTasks extends Component {

    constructor(){
        super();
        this.state = {
            task: '',
        };
    }

    handleInputValidation(){
        return {task:''}

    }

    updateInputTodo = (e) => {

      this.setState({task : e.target.value});

    }

    addTask = (e) =>{
        e.preventDefault();

        if(this.handleInputValidation){

            this.props.addTodoList(this.state.task);

            //  empty input after submit a task
            document.getElementById('inputID').value='';
            this.setState({task:''}) //clear state after submit

        }

        
    }

    render() {
        return (
            
        <div className="textFieldArea">
        <form onSubmit={(e) => this.addTask(e)}>
        <input id="inputID" ref="inputfield" className="inputTodo" onChange={(e) => this.updateInputTodo(e)} value={this.state.task["inputfield"]}></input>
        <button id="addbthclick" disabled={!this.state.task} className="addBtn" type="submit"><FontAwesomeIcon icon={faPlusCircle} size="5x" className="" /></button>
        </form>
        </div>
            
        )
    }
}

export default AddTasks
