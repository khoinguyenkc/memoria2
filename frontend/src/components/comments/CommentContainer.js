import React, { Component } from 'react';
import CommentDisplay from './CommentDisplay.js'
import CommentForm from './CommentForm.js'


export default class CommentContainer extends Component {

  generateComments = () => {
    // map over your movieData array and return an array of the correct JSX
    return this.props.comments.map( function(comment) { return <CommentDisplay comment={comment} />})
  }

  postCommentToApi = (content, postId) => {
    const formData = {content: content, post_id: postId}

    const configObject = { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        body: JSON.stringify(formData)
      }
    }

    fetch("http://localhost:3000/api/comments", configObject).
        then(function(response) {  return response.json();}).
        then(function(json) {  
          console.log(json)
              //update the post
          this.props.updateThisPost()
        })

  }

  submitComment = (content) => {
    //collect postid,  collect comment content, send token (not user id)
    const postId = this.props.postId
    // submit fetch post to backend comment CREATE controller action
    console.log(content)
    this.postCommentToApi(content, postId)

  }

  render() {
    return (
      <div >
        {this.generateComments()}
        <CommentForm  submitComment={this.submitComment} />
      </div>
    )
  }


}
