import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "",
      todoList: [],

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange(e){
    this.setState ({
      text: e.target.value

    })
  }
  handleFormSubmit(e){
    e.preventDefault();
    const {text, todoList} = this.state;
    const newTodoList = [...todoList, text];
    this.setState({
        todoList: newTodoList,
        text: "",
    })
  }


  render(){
    const {text, todoList} = this.state;
    return (
      <div className="container">
        <form onSubmit ={this.handleFormSubmit} className="mt-3">
          <label htmlFor="todo" className="form-label">
            Todo title
          </label>
          <input
          id="todo"
          type="text"
          className="form-control"
          value= {text}
          onChange = {this.handleInputChange}
          placeholder="Add todo..."/ >
        </form>

        <ul className = "list-group">
          {
            todoList.map(todoItem => {
              <li className="list-group-item">{todoItem}</li>

            })
          }

        </ul>


      </div>
    )
  }
}

export default App;
