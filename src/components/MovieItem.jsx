import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MovieItem({ movieData, imgFullUrl }) {
  const navigate = useNavigate()
  const movieClickHandler = (e) => {
    e.preventDefault()
    navigate(`/movie/${movieData.id}`, { state: { ...movieData, imgFullUrl } })
  }
  return (
    <div className="col">
      <Link to={`/movie/${movieData.id}`} onClick={movieClickHandler}>
        <div className="card">
          <img src={imgFullUrl} className="card-img-top" alt={movieData.title} />
          <div className="card-body">
            <h5 className="card-title">{movieData.title}</h5>
            <p className="card-text">{movieData.vote_count}</p>
            <p className="card-text">{movieData.release_date}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieItem
