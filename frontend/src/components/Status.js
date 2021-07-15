


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/posts';
import InstagramCarousel from './status/InstagramCarousel.js';
import CommentContainer from './CommentContainer.js';

class Status extends Component {

  constructor(props) {
    super()
    this.state = {
      hasPics: ( props.post.pictures && props.post.pictures.length !== 0 )
    }
  }

  updateThisPost = () => {
    this.props.updatePost(this.props.post.id)

  }

  renderPictures = () => {

    if ( this.props.post.pictures && this.props.post.pictures.length !== 0 ) {
      return (
        <div>
          <InstagramCarousel pictures={this.props.post.pictures} /> 
        </div>
      )

    } else {
      return null
      // return <div>no pictures for this post</div>


    }
    

  }

  renderComments = () => {
    // NEED TO CHECK COMMENTS IS NOW AVAILABLE, LIKE renderPictures, TO PREVENT ERROR
    return ( <CommentContainer comments={this.props.post.comments} /> )
  }

  componentDidMount() {
    this.props.updatePost(this.props.post.id)

  }


  render() {
    return (
    <div class="card h-100" >
  
        <h5 class="card-header">Featured</h5>
        <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51Bfy7Uy6HL._SX355_.jpg"></img>
        <div class="card-body">
            <h5 class="card-title">
              User id {this.props.post.user_id} , post id {this.props.post.id}            
              {/* <button onClick={this.updateThisPost}>
                update post details
              </button> */}
            </h5>
            <p class="card-text">{this.props.post.content}</p>
            <div>{this.renderPictures()}</div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        
        <div class="card-footer">
        <button type="button" class="btn btn-link"><small class="text-muted">Last updated 3 mins ago</small></button>        </div>
  
    </div>    
  )
  }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    updatePost: (postID) =>   dispatch(updatePost(postID))
  }
  
};


export default connect(null, mapDispatchToProps)(Status);


