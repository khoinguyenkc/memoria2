// modular. where user entere a comment


import React, { Component } from 'react';


export default class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      content: "Add a new comment"
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if ( this.state.content !== "" ) {
      this.props.submitComment(this.state.content)
      this.setState({ content: "Add a new comment"})
    }
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
            <input
              onChange={ event => this.handleInputChange(event)}
              value={this.state.content}
              id="content" name="content" type="text" />
        </div>
      </form>
    );
  }





}

