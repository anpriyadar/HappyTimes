const SET_LOADER_LOGIN = 'SET_LOADER_LOGIN'

const login = (username, Password) => {
  const data ={username, Password}
  
return (dispatch) => {
     dispatch({type:SET_LOADER_LOGIN, data})
}
}


export { login };
