import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Volunteer from './components/Volunteer/Volunteer';
import ShowVolunteerList from './components/ShowVolunteerList/ShowVolunteerList';
import AddEvent from './components/AddEvent/AddEvent';

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [image, setImage] = useState('')


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, image, setImage }}>

      <Router>
        <Switch>

          <Route path="/home/">
            <Header></Header>
            <Home />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/register/:category">
            <Register />
          </PrivateRoute>

          <Route path="/volunteer/:email">
            <Volunteer />
          </Route>

          <Route path="/admin/">
            <ShowVolunteerList />
          </Route>

          <Route path="/addevent/">
            <AddEvent />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
