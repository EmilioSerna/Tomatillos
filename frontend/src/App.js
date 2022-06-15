import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const Section = styled.section`
  background-color: #eee;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios.get('https://tomatillos-2.herokuapp.com/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <Section>
      <NavBar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>React + Flask Tutorial</p>
      <div>
        {getMessage.status === 200 ?
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}
      </div>
      <Outlet />
    </Section>
  );
}

export default App;
