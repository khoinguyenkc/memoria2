const getUsers = function() {
    console.log('getUsers here')
    const configObject = { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
      }      


    return (dispatch) => {
        dispatch({type: 'START_REQUESTING_USERS'})


        fetch(`http://localhost:3000/api/users`, configObject).
        then( res => res.json()).
        then( json => {
            console.log('users arrived')
            console.log(json)

          json.forEach( user => dispatch({type: 'ADD_USER', user: user }))




        }
          )
      }


};

export { getUsers };
