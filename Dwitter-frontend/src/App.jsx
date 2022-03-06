import React from 'react';
import Header from './components/Header/header'
import styled from "styled-components";
import {Route, Routes} from 'react-router-dom';
import NewTweets from './components/NewTweet/newTweets';

const Container = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`

const App = ({tweetService}) => {
  return (
    <>
    <Container>
      <Header/>
      <Routes>
        <Route exact path = "/" element = {<NewTweets tweetService = {tweetService}/>}></Route> 
      </Routes>
      </Container>
    </>
  );
};

export default App;