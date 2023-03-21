import React from 'react'
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor (){
    super();
    this.
    state={
      todo:[],
      error:'',

    }
  }
    componentDidMount() {
      fetch(URL)
      .then(res => res.json())
      .then (data => this.setState({todo: data.data}))
      .catch(err => this.setState({error: err.response.data.message}));
    }

    handlerAdd = (name) => {
      const newTodo ={
        name: name,
        id:Date.now(),
        completed:false
      }
      axios.post(URL, newTodo )
      .then(res => {
        this.componentDidMount()
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message})
      })
    }

    handlerClear = () =>{
      this.setState({
        ...this.state,
        todo: this.state.todo.filter(todo => {
          return ( todo.completed === false)
        })
      })
      console.log("clear button");
    }

    

    handlerToggle = (id) => {
      this.setState({
        ...this.state,
        todo: this.state.todo.map(todo => {
          if (todo.id === id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      })
    }
  
  render() {
    return (
      <div className='App'>
        <h2>Error: {this.state.error}</h2>
        <TodoList todo={this.state.todo} handlerToggle={this.handlerToggle}/>
        <Form todo={this.state.todo} handlerAdd={this.handlerAdd} handlerClear={this.handlerClear}/>
      </div>
    )
  }
}
