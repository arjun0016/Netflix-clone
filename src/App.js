import './App.css';
import Row from './component/Row';
import requests from './requests';
import Banner from './component/Banner';
import Nav from './component/Nav'
function App() {
  return (
    
    <div className="App">
      <Nav/>
      <header className="App-header">
      <Banner
      fetchUrl={requests.fetchNetflixOriginals}/>
      </header>
      <Row
      isLargeRow={true}
      title="NetflixOriginals"
      fetchUrl={requests.fetchNetflixOriginals}/>
    
    <Row
      title="Trending"
      fetchUrl={requests.fetchTrending}/>
    <Row
      title="TopRated"
      fetchUrl={requests.fetchTopRated}/>
    <Row
      title="ActionMovies"
      fetchUrl={requests.fetchActionMovies}/>
    <Row
      title="ComedyMovies"
      fetchUrl={requests.fetchComedyMovies}/>
    <Row
      title="HorrorMovies"
      fetchUrl={requests.fetchHorrorMovies}/>
    <Row
      title="RomanceMovies"
      fetchUrl={requests.fetchRomanceMovies}/>
    
    </div>
  );
}

export default App;
