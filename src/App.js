import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import requests from './requests';

function App() {
  return (
      <div className='app'>
          <Nav/>
          <Banner fetchUrl={requests.fetchTopRated}/>
          <Row title='NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>  
          <Row title='Trending Now' fetchUrl = {requests.fetchTrending}/>
          <Row title='Top Rated' fetchUrl = {requests.fetchTopRated}/>
          <Row title='Fast Paced Action?' fetchUrl = {requests.fetchActionMovies}/>
          <Row title='Want a Laugh?' fetchUrl = {requests.fetchComedyMovies}/>
          <Row title='Late Night Shrills' fetchUrl = {requests.fetchHorrorMovies}/>
          <Row title='Romance' fetchUrl = {requests.fetchRomanceMovies}/>
          <Row title='Through the Lens' fetchUrl = {requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;

