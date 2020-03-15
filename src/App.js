import React from 'react';
import './App.css'
import Header from './contents/header';
import PostBox from './contents/postBox';
import Footer from './contents/footer';

function App() {
  return (
    <div className='main-wrapper'>
      <Header></Header>
      <PostBox></PostBox>
      <Footer></Footer>
    </div>
  );
}

export default App;