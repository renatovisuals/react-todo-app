import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        inputToggle:false
    }
  }



  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="app-title">
            <span> React to-do </span>
            <i class="fa fa-plus plus-icon"></i>
          </div>
          <form>
           <input type="text" name="todo" placeHolder ="type a todo here" className ="todo-input"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
