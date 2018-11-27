import React, { Component } from 'react';


class TodoInput extends Component {
  constructor(props){
    super(props);

      this.state = {
      todoName:'',
      isComplete:false,
      id:Date.now()
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e){
  this.setState({
    todoName: e.target.value
  })
  }

  submit(e){

  this.setState({
    id:Date.now()
  },)
  this.props.handleSubmit(this.state);
  e.preventDefault();
  this.setState({
    todoName:''
  })
  }

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.submit}>
         <input  type="text" name="todo" value = {this.state.todoName} placeholder ="type a todo here" className ={this.props.visible ? "input visible" : "input"} onChange = {this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default TodoInput;
