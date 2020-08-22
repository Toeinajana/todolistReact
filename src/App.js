import React from 'react';
import './App.css';
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoList from './components/TodoList';
import AddTasks from './components/AddTasks';


class App extends React.Component {

  constructor(){

    super();
    this.state = {
      text:'',
      tasks:[]
    };

  }

  componentDidMount = () => {

    const tasks = localStorage.getItem('tasks');

    if(tasks){
      const storedTasks = JSON.parse(tasks);
      this.setState({tasks : storedTasks});
    } 
    else {
      console.log('null')
    }

  }

  addEachTask = async (task) => {

    await this.setState({tasks : [...this.state.tasks, task]})
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    console.log(localStorage.getItem('tasks'));
    

  }

  deleteTask = async (finishedTask) => {

    const newTask = this.state.tasks.filter((task_) => {
      return task_ !== finishedTask
    });

     await this.setState({ tasks:newTask })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    
    // console.log(finishedTask)
  }
  
  editTask = (task, key) => {

    var tasks = this.state.tasks;
    tasks.map(task => {
      if(task.key === key){
        
      console.log('clicked laew')
       task=task;
       task = localStorage.setItem('tasks', JSON.stringify(this.state.tasks))

      }
    })
      
    this.setState({
      task:tasks
    })
  }

  clearList = () => {

  this.setState({tasks:[]});
  localStorage.clear();
    
  }

  render(){

  

  return (
    <div className="App">
      <h1 className>To-Do List</h1>
 
      <div className="ListArea">

                            {/* passing props */}
        <AddTasks addTodoList={this.addEachTask}/>
        <TodoList tasks={this.state.tasks} deleteTask = {this.deleteTask} editTask = {this.editTask}/>
        <div className="clearTask" onClick={this.clearList}><FontAwesomeIcon icon={faRedoAlt} size="4x" className=""/></div>
        


      </div>

    </div>
  );
}



}




export default App;
