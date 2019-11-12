import React from 'react';
import {Route, Redirect} from "react-router-dom";
import axios from "axios";
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FriendsList from './components/FriendsList/FriendsList';

function App() {

  
  return (
    <div className="App">
      <Route path="/login">
        <LoginForm />
      </Route>
      <PrivateRoute path="/protected">
        <h1>Welcome</h1>
      </PrivateRoute>
      <PrivateRoute path="/friends">
        <FriendsList />
      </PrivateRoute>
    </div>
  );
}

export default App;
