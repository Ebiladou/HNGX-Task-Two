import React from 'react'

function Searchresult() {
  return (
    <div className='searchresult-container'>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-result">
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Searchresult