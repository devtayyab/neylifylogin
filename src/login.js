import React, { useContext, useState } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
// import { Link } from "gatsby";
import netlifyIdentity from "netlify-identity-widget";
import { loginContext } from "./context";
export default props => {
  // const { dispatch, state } = useContext(loginContext);
  const [user, setuser] = useState(null)
  netlifyIdentity.init()
  const current = netlifyIdentity.currentUser().user_metadata.full_name

  console.log(user)
  // console.log(state)
  console.log(netlifyIdentity.currentUser())

  // function addTransaction() {
  //   dispatch({
  //     type: 'Login',
  //     payload: netlifyIdentity.currentUser().user_metadata.full_name,

  //   });

  // }


  return (
    <Container>
      <h1>Login</h1>

      <Flex as="nav">
        <NavLink href="#" to="/" p={2}>
          Home
        </NavLink>
        <NavLink href="#" to={"/app"} p={2}>
          Dashboard
        </NavLink>
        </Flex>
        {
          user ? (
            <NavLink href="#!" p={2}>
              {current}
            </NavLink>) :
  
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            return (

              netlifyIdentity.open(),
              console.log("click"),
              setuser(current)
              // console.log(state)

            )
          }}
        >
          Log In
     </Button>
      </Flex>

        }

    </Container>
  );
};