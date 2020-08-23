import React from 'react';
import './App.css';
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoList from './components/TodoList';
import AddTasks from './components/AddTasks';
import FlipMove from 'react-flip-move';




class App extends React.Component {

  constructor() {

    super();
    this.state = {
      text: '',
      tasks: [],

    };

  }

  componentDidMount = () => {

    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      const storedTasks = JSON.parse(tasks);
      this.setState({ tasks: storedTasks });
    }
    else {
      console.log('null')
    }

  }

  addEachTask = async (task) => {

    await this.setState({ tasks: [...this.state.tasks, task] })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    console.log(localStorage.getItem('tasks'));


  }

  deleteTask = async (finishedTask) => {

    const newTask = this.state.tasks.filter((task_) => {
      return task_ !== finishedTask
    });
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    await this.setState({ tasks: newTask })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))

  }

  clearList = () => {

    this.setState({ tasks: [] });
    localStorage.clear();

  }

  saveTask = (index) => {
    const tasks = localStorage.getItem('tasks') || []
    let storedTasks = JSON.parse(tasks)
    storedTasks.splice(index, 1, this.state.tasks[index])
    localStorage.setItem('tasks', JSON.stringify(storedTasks))


  }

  onChangeHandle = (value, index) => {
    let updatedTasks = this.state.tasks
    updatedTasks.splice(index, 1, value)

    this.setState({ tasks: updatedTasks })
  }


  render() {



    return (
      <div className="App">
        <h1>To-Do List</h1>

        <div className="ListArea">

          {/* passing props */}
          <AddTasks addTodoList={this.addEachTask} />

          <FlipMove duration={600} easing="ease-in-out">

            <TodoList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              saveTask={this.saveTask}
              onChangeHandle={this.onChangeHandle}
            />
            <div className="clearTask" onClick={this.clearList}><FontAwesomeIcon icon={faRedoAlt} size="4x" className="" /></div>
            <spand className="clearData">Clear</spand>
          </FlipMove>

        </div>

      </div>
    );
  }



}




export default App;
