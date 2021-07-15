import React, { Component } from 'react';
import Comment from './Comment.js'


export default class CommentContainer extends Component {

  generateComments = () => {
    // map over your movieData array and return an array of the correct JSX
    return this.props.comments.map( function(comment) { return <Comment comment={comment} />})
  }

  render() {
    return (
      <div >
        {this.generateComments()}
      </div>
    )
  }
}
