import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='container'>
      <h1>Welcome To Game-On</h1>
      <p>
        <Link to="https://en.game-tournaments.com/dota-2">Link Sample</Link>
      </p>

    </div>
  );
}