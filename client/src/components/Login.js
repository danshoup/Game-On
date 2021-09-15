
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Input from "./Input";
import "./LoginWeb.css";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';





class Login extends Component {
  render() {
    return (
      <div className="container-center-horizontal">
        <form className=" screen" name="form3" action="form3" method="post">
          <div className="overlap-group-4">
            <Image src="/img/343962@1x.png" fluid />
            <div className="input-4">
              <Input>User Name</Input>
              <Input className="input2props">User Name</Input>
            </div>
            <Link to="/UserPage">
              <div className="button-large smart-layers-pointers">
                <Button variant="primary">Link to User Page</Button>{' '}
              </div>
            </Link>
            <Link to="/SignUp">
              <div className="already-have-an-acco smart-layers-pointers arial-regular-normal-white-22px">
                Don't have an account?  Click here!
              </div>
            </Link>
            <img className="game-on-logo-2" src="/img/gameonlogo-2@1x.png" alt=""/>
            <input
              className="johndoegmailcom arial-regular-normal-dodger-blue-20px"
              name="johndoegmailcom5"
              placeholder="email"
              type="email"
            />
            <input
              className="password-2 arial-regular-normal-dodger-blue-20px"
              name="password6"
              placeholder="password"
              type="password"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login