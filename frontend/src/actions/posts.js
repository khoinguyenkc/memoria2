const getPosts = function(specObject) {

    const configObject = { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "timerange": "recent",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
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
        const timeRange = "recent";

        fetch(`http://localhost:3000/api/posts?timerange=${timeRange}`, configObject).
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


export { getPosts };