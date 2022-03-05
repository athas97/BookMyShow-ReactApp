import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider';
import Premiere from './components/Premiere';
import Footer from './components/Footer';
import Registration from './components/Registration';
// import AllMovies from './components/AllMovies';
// import SingleMovie from './components/SingleMovie';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <SliderImages /> */}
        {/* <CardSlider /> */}
        {/* <Premiere /> */}
        <Routes>
          <Route path='/' element={<><SliderImages /><CardSlider /> <Premiere /></>} />
          <Route path='/movies' element={<AllMoviesFetch />} />
          <Route path='/movie/:movid' element={<SingleMovieFetch />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
