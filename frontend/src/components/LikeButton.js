import React, { Component } from 'react';

// import { addPost } from '../actions/posts'
export default class LikeButton extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          postIsLiked: (this.props.post.likes && this.props.post.likes.length !== 0)
        };
      }
    
    handleClick = () => {
        this.props.submitLike()
        
        // either create a like or destroy the like, depends on state
        // if (this.state.postIsLiked === false) {
        //     this.setState({ postIsLiked: true })
        //             this.props.submitLike()
        // }   else {
        //     this.props.unlike()
        // }

        }

    renderFormatting = () => {
        // class={`${this.renderFormatting()}`} 
        const phrasecss = this.state.postIsLiked ? 'blue-text' : 'red-text';
        console.log(phrasecss)
        return phrasecss
    } 

    render() {
        return (

            <a onClick={this.handleClick}><i class="glyphicon glyphicon-thumbs-up"></i> Like {this.state.postIsLiked}</a>
        )
    }

}
