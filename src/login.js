import React, { useContext } from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
// import { Link } from "gatsby";
import netlifyIdentity from "netlify-identity-widget";
import { IdentityContext } from "./context";
export default props => {
  const { user} = useContext(IdentityContext);

  return (
    <Container>
      <Flex as="nav">
        <NavLink href="#" to="/" p={2}>
          Home
        </NavLink>
        <NavLink href="#" to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink href="#!" p={2}>
            {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            netlifyIdentity.open();

          }}
        >
          Log In
        </Button>
      </Flex>
    </Container>
  );
};