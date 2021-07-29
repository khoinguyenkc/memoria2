import React, { Component } from 'react';
import Status from './Status';
import { connect } from 'react-redux';
import { getOnePost } from '../actions/posts';
import { getUsers } from '../actions/users';
import NewsFeed from './NewsFeed';


 class PostUniView extends Component {
    // threecolumnstructure, like home page

    componentDidMount() {
        // fetch request to api (similar to getPosts)
        const postid = this.props.match.params.postid
        // and then pass the content to a Status component
        // <Status />
        this.props.getUsers()

        this.props.getOnePost(postid)

        console.log(`post id is ${postid}`)

    }

    renderPost = () => {
        return <NewsFeed posts={this.props.postsReceived} users={this.props.usersReceived}/>
    }


    render() {
        return (
            <div class="container-fluid">

                <div class="row">
  
                  <div class="col-sm-3">
                      sidebar left
                  </div>
  
                <div class="col-sm-6">
                    {this.renderPost()}

                </div>

                <div class="col-sm-3">
                      sidebar right
                  </div>

                </div>



            </div>

                  )}

}



const mapStateToProps = (state) => {

    return { postsReceived : state.posts.posts,
      usersReceived: state.users.users }
  }
  
    
  const mapDispatchToProps = (dispatch) => {
    return { 
      getOnePost: (postId) => dispatch(getOnePost(postId)),
      getUsers: () => dispatch(getUsers())
     }
    
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostUniView);