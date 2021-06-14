const addToken = function(data) {
    const formData = {email: data.email, password: data.password}

    const configObject = {  

        method: "POST",  
    
        headers: {    
            "Content-Type": "application/json",    
            "Accept": "application/json"  },  
    
        body: JSON.stringify(formData)/* Your data goes here */
    
    }

      //need to save it to redux central state
      


    return (dispatch) => {
        dispatch({type: 'START_REQUESTING_TOKEN'})

        fetch("http://localhost:3000/api/auth_user", configObject).
        then(function(response) {  return response.json();}).
        then(function(json) {  
          console.log(json)
          dispatch({type: 'ADD_TOKEN', token: json.auth_token })
    
        })
    }
    



};


export { addToken };