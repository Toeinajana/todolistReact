import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import AddBox from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Bin from '@material-ui/icons/DeleteForever';
import {MDBIcon, MDBBtn} from 'mdbreact';
import { faPlusCircle, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';
import AddTasks from './components/AddTasks';


class App extends React.Component {

  constructor(){

    super();
    this.state = {
      text:'',
      tasks:[]
    };

    // this.deleteTask = this.deleteTask.bind(this);
    // this.editTask = this.editTask.bind(this);
  }

  componentDidmount = () => {

    const tasks = localStorage.getItem('tasks');

    if(tasks){
      const storedTasks = JSON.parse(tasks);
      this.setState({tasks : storedTasks});
    } 
    else {

    }

  }

  addEachTask = async (task) => {

    await this.setState({tasks : [...this.state.tasks, task]})
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    console.log(localStorage.getItem('tasks'));

  }

  deleteTask = (finishedTask) => {
  
    

    const newTask = this.state.tasks.filter((task_) => {
      return task_ !== finishedTask
    });

    this.setState({ tasks:newTask })
    console.log(finishedTask)
  }
  
  editTask = (task, key) => {

    var tasks = this.state.tasks;
    tasks.map(task => {
      if(task.key === key){
        
        // this.setState({ tasks:prevtasks })
        console.log('clicked laew')
       task=task;
       task = localStorage.setItem('tasks', JSON.stringify(this.state.tasks))

      }
    })
    // console.log(localStorage.getItem('tasks'));
      
    this.setState({
      task:tasks
    })
  }



  render(){

  

  return (
    <div className="App">
      <h1 className>To-Do List</h1>
 
      <div className="ListArea">

        {/* <div className="textFieldArea">
       
        <input className="inputTodo"></input>
        <button className="addBtn" type="submit"><FontAwesomeIcon icon={faPlusCircle} size="5x" className="" /></button>
        </div> */}

                            {/* passing props */}
        <AddTasks addTodoList={this.addEachTask}/>
        <TodoList tasks={this.state.tasks} deleteTask = {this.deleteTask} editTask = {this.editTask}/>


      </div>

    </div>
  );
}



}




export default App;
