import React, { Component } from 'react'
import '../App.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class todoList extends Component {

    constructor(){
        super();
        this.state = {
            editing : false,
            task: ''
        }
    }

    // handleEdit = (event) => {

    //     this.state({editing : true})
    // }

    // handleEditChange = (event) => {
    //     const editing_ = event.target.value;
    //     this.setState({newEdit : editing_});
    // }

    
    render() {

        const {tasks} = this.props;
        // const viewStyle ={};
        // const editStyle={};

        // if(this.state.editing){
        //  viewStyle.display = 'none';
        // }
        // else {
        //  editStyle.display = 'none';
        // }

        return (
          <div className="mt-4">
          {
              
           tasks.map((task_,index) => {
               return(

          <div className="ListItem" key={index}>
          {/* <p className="ListText float-left pl-4 pb-2">{task_}</p> */}
          <input className="ListTextbox float-left pl-4 pb-" type="text" key={task_.id} value = {task_} onChange = {(e) => {this.props.editTask(index)}}/>
          <span onClick={ () => this.props.deleteTask(task_)} key={task_.id} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faTrashAlt} size="2x"/></span>
          <span onClick={ () => this.props.editTask(task_)} key={task_.id} className="float-right pr-4 delTrash"><FontAwesomeIcon icon={faEdit} size="2x"/></span>
          {/* <input className="ListTextbox float-left pl-4 pb-" style={editStyle} type="text" key={task_.id} value = {this.state.editing_} onChange = {(e) => {this.props.handleEditChange(index)}}/> */}
          
          </div>
          
               )

           })
           

          }
          

          </div>
         
        )
    }
}

export default todoList
