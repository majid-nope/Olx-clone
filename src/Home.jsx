import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function Home() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header /> <Body />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login/> <Body />
                </>
              }
            />
          </Routes>
        </Router>
      </>
    );
    
  }
    


export default Home
