import React, { useContext } from "react";
import { Router, Link } from "react-router-dom";

import { Container, Flex, Heading, Button, NavLink } from "theme-ui";
import { IdentityContext } from "./context";
const netlifyIdentity = require("netlify-identity-widget");
let Dash = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);

  return (
    <Container>
      <Flex as="nav">
        <NavLink  to="/" p={2}>
          Home
        </NavLink>
        <NavLink to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink
            href="#!"
            p={2}
            onClick={() => {
              netlifyIdentity.logout();
            }}
          >
            Log out {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <span>Dash hasUser: {user && user.user_metadata.full_name}</span>
    </Container>
  );
};

let DashLoggedOut = props => {
  const { user } = useContext(IdentityContext);

  return (
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
      <Heading as="h1">Get Stuff Done</Heading>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          netlifyIdentity.init();
          netlifyIdentity.open();
        }}
      >
        Log In
      </Button>
    </Flex>
  );
};

export default props => {
  const { user } = useContext(IdentityContext);

  if (!user) {
    return (
 
        <DashLoggedOut path="/app" />
  
    );
  }
  return (

      <Dash path="/app" />
   
  );
}