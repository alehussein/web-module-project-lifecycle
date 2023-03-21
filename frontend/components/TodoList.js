import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (  <ul>
    {
      this.props.todo.map((all, index)=>{
        return(<Todo handlerToggle={this.props.handlerToggle} key={index} todo={all}/>)
      })

    }
  </ul>
    )
    }
}
