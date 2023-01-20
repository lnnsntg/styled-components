import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import {Button} from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg"></Logo>
          <Button>Try it free</Button>
        </Nav>

        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  );
}
