import React from 'react'

export default class Form extends React.Component {
   constructor() {
    super();
      this.state= {
        input:"",
    }
   }
 
handleSubmit = (e) => {
  e.preventDefault();
  this.props.handlerAdd(this.state.input);
}

handlerChange = (e) => {
  this.setState({
    ...this.state,
    input: e.target.value
  });
}


  render() {
    return (
      <form>
          <input placeholder='name' onChange={this.handlerChange}></input>
          <button onClick={this.handleSubmit}>Submit</button>

          <button onClick={this.props.handlerClear}>Clear Data</button>
          
        </form>
    )
  }
}
