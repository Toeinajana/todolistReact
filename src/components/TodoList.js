import React, { Component } from 'react'
import '../App.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class todoList extends Component {

    
    render() {

        const {tasks} = this.props;

        return (
          <div className="mt-4">
          {
              
           tasks.map((task_, index) => {
               return(

          <div className="ListItem" key={index}>
          <p className="ListText float-left pl-4 pb-2">{task_}</p>
          <span onClick={ () => this.props.deleteTask(task_)} key={index} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faTrashAlt} size="2x"/></span>
          </div>
               )

           })

          }

          </div>
         
        )
    }
}

export default todoList
