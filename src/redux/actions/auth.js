import realmStorage from '../../storage';


const SET_LOADER_LOGIN = 'SET_LOADER_LOGIN'

const login = (username, Password) => {
  const data ={username,Password}
  realmStorage.createTodoItem(data);
  const users = realmStorage.getTodoItems()
  console.log("******",users)

return (dispatch) => {
     dispatch({type:SET_LOADER_LOGIN, data})
}
}


export { login };
