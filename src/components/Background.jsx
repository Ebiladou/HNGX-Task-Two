import React, {useState, useEffect} from 'react'
import imbd from '../assets/IMDB.png'
import Tomatoe from '../assets/Rotten Tomatoes.png'
import '../App.css'
import Header from './Header'
import axios from '../services/BaseApi'

function Background() {
  
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get('/discover/movie', 
        {
          params: {
            sort_by: 'popularity.desc',
            page: Math.floor(Math.random() * 100) + 1,
          },
        });

        const randomMovie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];

        if (randomMovie) {
          setMovieData({
            title: randomMovie.title,
            description: randomMovie.overview,
            posterPath: randomMovie.poster_path,
          });
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchRandomMovie();
    const intervalId = setInterval(fetchRandomMovie, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    backgroundImage: movieData
      ? `url(https://image.tmdb.org/t/p/original${movieData.posterPath})`
      : '',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '400px',
      width: '100%',
      transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <div className='bg-container' style={containerStyle}>
        <div className="bg-items">
            <h1>{movieData?.title || 'Loading...'}</h1>
            <div className="ratings">
                <img src={imbd} alt="" />
                <img src={Tomatoe} alt="" />
            </div>
            <p>{movieData?.description || 'Loading...'}</p>
            <div className="trailer">
                <h1>Watch Trailer</h1>
            </div>
        </div>
        <Header/>
    </div>
  )
}

export default Background