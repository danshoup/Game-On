import React, { Component } from 'react';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <UserPage /> 
      </div>
    )
  }
}
 

export default App;



