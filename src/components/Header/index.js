import React from 'react';
import { Container } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Container fluid className="app-header">
      <header className="header">Weirdness Calculator</header>
    </Container>
  );
};

export default Header;
