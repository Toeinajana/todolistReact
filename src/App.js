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
      tasks:[]
    };

    this.deleteTask = this.deleteTask.bind(this);
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

  deleteTask = (index) => {
  
    // const finishedTask = this.state.tasks.filter(task => task !== key);
    // this.setState({tasks:this.state.tasks.filter(task => task !== key)})

    const finishedTask = this.state.tasks.filter((task_) => {
      return index !== index
    });

    this.setState({ tasks:finishedTask })
    console.log(index)
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
        <TodoList tasks={this.state.tasks} deleteTask = {this.deleteTask}/>
        {/* <ListItem/> */}
       
          


          {/* <TextField fullWidth 
          id="outlined-basic" 
          label="Add to-do" 
          variant="outlined"
          inputProps={{
            endAdornment: (<AddButton/>),
            }}/> */}
          {/* <AddBox fontSize="large"/> */}

        {/* <div className="ListItem">
          <p className="ListText">Test</p>
        </div>
        <div className="ListItem">
          <p className="ListText">Test</p>
        </div>
        <div className="ListItem">
          <p className="ListText">Test</p>
        </div> */}



      </div>

    </div>
  );
}



}




export default App;
