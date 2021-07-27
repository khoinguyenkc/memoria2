import React, { Component } from 'react';
import LikeButton from './LikeButton';

// import { addPost } from '../actions/posts'
export default class LikeBar extends Component {
    renderReactions = () => {

        if ( !!this.props.post.postlikes === false) { return null }

        let text;
        const likeCount = this.props.post.postlikes.length
        console.log(likeCount)
        if ( likeCount === 0 ) {
            text = "";
        }
        else if ( likeCount === 1 ) {
            text = `${this.props.post.postlikes[0].user_id}`;
        } 
        else if ( likeCount === 2 ){
            text = `${this.props.post.postlikes[0].user_id}  and ${this.props.post.postlikes[1].user_id}   `;
        } 
        else {
            // iterate through everyone, a => "a, ", b => "b, " and so on....  last one gets "and Z likes this"
            const sentenceArray = this.props.post.postlikes.map( (object, idx, arr) => { 
               let stringbit;
                if ( idx !== arr.length - 1  ) {
                    stringbit = `${object.user_id}`
            } else {
                stringbit =  `and ${object.user_id}`
            }
                return stringbit;
        })
        text = sentenceArray.join(",")
        }

        return <span>{text}</span>
    }


    testMethod = () => {
        console.log("test method activated. button click")
        
    }    

    submitLike = () => {
        console.log("submit like activated")
        this.postLikeToApi(this.props.post.id)
    }    

    postLikeToApi = (postId) => {
        console.log("postLikeToApi activated")

        const updateMethod = this.props.updateParentComponent;
        
        const formData = {post_id: postId}

        const configObject = { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
              body: JSON.stringify(formData)
            }
          }
      
          fetch("http://localhost:3000/api/postlikes", configObject).
              then(function(response) {  return response.json();}).
              then(function(json) {  
                console.log(json)
              //update the post, must do this middle step because "This" doesn't work inside here
              updateMethod()
              })
    }

    unlike = () => {
        console.log("unlike activated")
        this.deleteLikeInApi(this.props.post.id)
    }

    deleteLikeInApi = (postId) => {
        console.log("deleteLikeInApi activated")

        const updateMethod = this.props.updateParentComponent;
        

        const configObject = { 
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            }
          }
      
          fetch(`http://localhost:3000/api/postlikes/${postId}`, configObject).
              then(function(response) {  return response.json();}).
              then(function(json) {  
                console.log(json)
              //update the post, must do this middle step because "This" doesn't work inside here
              updateMethod()
              })
    }



    render() {
        return (
            <div>
                <div class="d-flex text-center">
                            <div class="fw-bold flex-grow-1">
                                <LikeButton 
                                post={this.props.post} 
                                submitLike={this.submitLike} 
                                unlike={this.unlike} 
                                />
                                </div>
                            <div class="fw-bold flex-grow-1"><span onClick={this.testMethod}><i class="glyphicon glyphicon-thumbs-up"></i> Comment</span></div>
                </div>

                <div class="deemphasized-text d-flex likebar ">
                    <div  style={{width: '60%'}}> {this.renderReactions()} </div>
                    <div  class="  text-end" style={{width: '40%'}}>4 comments</div>
                </div>


            </div>
        )
    }

}
