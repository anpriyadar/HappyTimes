const SET_LOADER_LOGIN = 'SET_LOADER_LOGIN'


import {initialstate} from '../initialstate.js'

export default (state=initialstate.auth, action)=>{
  switch(action.type){
    case SET_LOADER_LOGIN:
    return Object.assign({}, {isLoading: true, username: action.data})
    default:
    return state
  }
  }
