import React from 'react';
import Navbar from '../components/Navbar'

const container = {
  padding: '10px',
  textAlign: 'center'
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={container}>
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default Home;