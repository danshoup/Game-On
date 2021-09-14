import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



class UserPage extends Component {
  render() {
    return (
      <>
        <Container>
        <div className="d-grid gap-2">
          <Button href="/signup" variant="danger" size="lg">Signup</Button>
        </div>
        </Container>
      </>
    )
    
  }
}

export default UserPage