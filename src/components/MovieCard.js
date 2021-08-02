import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img className="card--image" 
      // https://image.tmdb.org/t/p/original/[poster_path]
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><span>RELEASE DATE: {movie.release_date}</span></p>
        <p><span>RATING: {movie.vote_average}</span></p>
        <p className="card--desc">{movie.overview}</p>
      </div>
  </div>
  )
}
