const getPosts = function(specObject) {

    const configObject = { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "timerange": "recent",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
      }



      //need to save it to redux central state
      


    return (dispatch) => {
        dispatch({type: 'START_REQUESTING_TOKEN'})

        // fetch("http://localhost:3000/api/auth_user", configObject).
        // then(function(response) {  return response.json();}).
        // then(function(json) {  
        //   console.log(json)
        //   dispatch({type: 'ADD_TOKEN', token: json.auth_token })
    
        // })


        //later make sure the action creator can take parameters to specify time range
        let query;
        const type = specObject.type;

        if (type === "recent") {
          query = `type=${type}`
        } else if (type === "date") {
          query = `type=${type}&day=${specObject.day}&month=${specObject.month}&year=${specObject.year}`
        } else if (type === "month") {
          query = `type=${type}&month=${specObject.month}&year=${specObject.year}`
        } else if (type === "year") {
          query = `type=${type}&year=${specObject.year}`
        }

        fetch(`http://localhost:3000/api/posts?${query}`, configObject).
        then( res => res.json()).
        then( json => {
            console.log(json)
              //content of JSON.stringify(json) :
          //   [{"id":1,"content":"my first status. the weather is so nice today","user_id":1,"created_at":"2021-06-07T20:58:19.523Z","updated_at":"2021-06-07T20:58:19.523Z"}]
              //make sure u only use json, not json.stringify(json). loop through array


          json.forEach( post => dispatch({type: 'ADD_POST', post: post }))




        //   json.forEach( post => console.log(post))

        }
          )
      }


};


const getOnePost = function(postId) {

  const configObject = { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`
      }
    }



    //need to save it to redux central state
    


  return (dispatch) => {
      dispatch({type: 'START_REQUESTING_TOKEN'})


      fetch(`http://localhost:3000/api/posts/${postId}`, configObject).
      then( res => res.json()).
      then( json => {
          console.log(json)
        dispatch({type: 'ADD_POST', post: json })





      }
        )
    }


};




const updatePost = function(postID) {

  const configObject = { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "timerange": "recent",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    }


  return (dispatch) => {
      dispatch({type: 'START_REQUESTING_TOKEN'})



      fetch(`http://localhost:3000/api/posts/${postID}`, configObject).
      then( res => res.json()).
      then( json => {
          console.log('update action creator called')
          console.log(json)
            //content of JSON.stringify(json) :
        //   [{"id":1,"content":"my first status. the weather is so nice today","user_id":1,"created_at":"2021-06-07T20:58:19.523Z","updated_at":"2021-06-07T20:58:19.523Z"}]
            //make sure u only use json, not json.stringify(json). loop through array


       dispatch({type: 'UPDATE_POST', post: json })




      //   json.forEach( post => console.log(post))

      }
        )
    }

    
  
  



};


export { getPosts, getOnePost, updatePost };