 import netlifyIdentity from 'netlify-identity-widget' 
export default (state, action) => {
console.log(state)
console.log(state)
    switch (action.type) {
      case 'Login':
        console.log(state)
        console.log(action)
        return  console.log("great")
      case 'Logout':
        console.log(state)
        console.log(action)
  
        return console.log("logout")
  
      default:
        return state;
    }
  
  }