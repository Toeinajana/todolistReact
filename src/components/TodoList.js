import React, { Component } from 'react'
import '../App.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit , faSave } from "@fortawesome/free-solid-svg-icons";
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
              
           tasks.reverse().map((task_,index) => {
            // console.log(index)
               return(

          <div className="ListItem" key={index}>
          <input className="ListTextbox float-left pl-4 pb-" type="text" key={task_.id} value = {task_} onChange = {(e) => {this.props.editTask(index)}}/>
          <span onClick={ () => this.props.deleteTask(task_)} key={task_.id} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faTrashAlt} size="2x"/></span>
          <span onClick={ () => this.props.editTask(task_)} key={task_.id} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faSave} size="2x"/></span>

          </div>
          
               )

           })

          }

          </div>
         
        )
    }
}

export default todoList
