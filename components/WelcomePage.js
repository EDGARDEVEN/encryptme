import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const WelcomePage = () => {
  return (
    <Container>
      <Jumbotron className="mt-5">
        <h1>Welcome to our Encryption Platform</h1>
        <p>
          Securely encrypt your files with ease!
        </p>
        <p>
          <Button variant="primary" href="/encrypt">Get Started</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default WelcomePage;
