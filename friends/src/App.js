import React from 'react';
import {Route, Redirect} from "react-router-dom";
import axios from "axios";
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';

function App() {

  const handleLogin = (credentials) => {

  }


  return (
    <div className="App">
      <Route path="/login">
        <LoginForm />
      </Route>
    </div>
  );
}

export default App;
