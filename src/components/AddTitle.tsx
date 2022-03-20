import React from "react";
import axios from "axios";

export default class AddTitle extends React.Component {
  state = {
    title: "",
    description: "",
    due_date: "",
    completed: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post("http://localhost:3004/todo", {
        title: this.state.title,
        description: this.state.description,
        due_date: this.state.due_date,
        completed: this.state.completed,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("api Erorr: ", err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Due Date:
            <input
              type="text"
              name="due_date"
              value={this.state.due_date}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Completed:
            <input
              type="text"
              name="completed"
              value={this.state.completed}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
