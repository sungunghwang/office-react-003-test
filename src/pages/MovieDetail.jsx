import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function MovieDetail() {
  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <div className="container cnt">
      <h1>Movie</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 외부 영화 api 데이터 가져와 썸네일 목록 및 상세페이지 구성</h2>

      <div className="movie-detail">
        <h3>{state.title}</h3>
        <img src={state.imgFullUrl} alt={state.title} />
        <p className="mt-3">{state.overview}</p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={() => {
              navigate(-1)
            }}
          >
            목록
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
