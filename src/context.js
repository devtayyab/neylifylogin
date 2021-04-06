import { createContext, useReducer } from "react"
import React  from 'react'
import Taskreducer from './reducer'
import netlifyIdentity from 'netlify-identity-widget'
const user= null
export const loginContext = createContext();

export const ContextProvider = (props) =>{

const [state, dispatch] =useReducer(Taskreducer,user)
console.log(state)
return(

  <loginContext.Provider value={{state, dispatch}}>
    {console.log(state)}
    {props.children}
  </loginContext.Provider>
)


}
