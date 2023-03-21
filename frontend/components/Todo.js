import React from 'react'

export default class Todo extends React.Component {

  handlerClick = () => {
    console.log("handle Click", this.props.todo.completed);
    this.props.handlerToggle(this.props.todo.id);
  }


  render() {
    return (<li onClick={this.handlerClick}>{this.props.todo.name} {this.props.todo.completed?<span> - Complete</span>:<span></span>}</li>)
      
    
    }
}
