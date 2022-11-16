import React from 'react';

import Button from './components/Button';
import './App.css';
import { Link, Navbar } from './components';
import styled from 'styled-components';

const HEADER = styled.div`
  margin: 41px 120px;
  @media(max-width: 992px) {
    margin: 0 20px;
  }
`;
function App() {
  return (
    <HEADER>
         <Navbar></Navbar>
    </HEADER>
  );
}

export default App;
