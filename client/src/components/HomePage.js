import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Welcome To Game On; This is the Main Info Page</h1>
            <Link to="/login">
              <div className="button-large smart-layers-pointers">
                <Button variant="primary">Primary</Button>{' '}
              </div>
            </Link>


      </>
    )
  }
}

export default HomePage

