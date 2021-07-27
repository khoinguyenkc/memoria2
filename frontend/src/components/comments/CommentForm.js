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
        <div class="d-flex new-comment-form">

        <div style={{width: '40px'}} >
          <img width="40" height="40"  src="https://images.wsj.net/im-53676?width=1280&size=1"></img>
        </div>

        <div> 
          <form  onSubmit={event => this.handleSubmit(event)}>
              <input
                class="new-comment-bubble"
                onChange={ event => this.handleInputChange(event)}
                value={this.state.content}
                id="content" name="content" type="text" />
          </form>
        </div>

        </div>
    );
  }





}

