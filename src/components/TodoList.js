import React, { Component } from 'react'
import '../App.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class todoList extends Component {

    constructor(){
        super();
        this.state = {
            editing : false,
            task: ''
        }
    }

    render() {

        const {tasks} = this.props;

        return (
          <div className="mt-4">
          {
              
           tasks.map((task_,index) => {
           
               return(

          <div className="ListItem" key={index}>
          <input className="ListTextbox float-left pl-4 pb-" type="text" key={index} value = {task_} onChange = {(e) => {
              const input = e.target.value
              this.props.onChangeHandle(input, index)
              }}/>
          <span onClick={ () => this.props.deleteTask(task_)} key={index} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faTrashAlt} size="2x"/></span>
          <span onClick={ () => this.props.saveTask(index)} key={index} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faSave} size="2x"/></span>

          </div>
          
               )

           })

          }

          </div>
         
        )
    }
}

export default todoList
