import React from 'react';
import { useParams } from "react-router-dom";

export default function UserPage() {
  let { id } = useParams() 
    return (
      <>
      <h1>This is a user {id} </h1>
      </>
    );
  }