import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MovieItem from '../components/MovieItem'

const apiToken = process.env.REACT_APP_API_TOKEN
console.log(apiToken)
const movieImgUrl = 'https://image.tmdb.org/t/p/w500'
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: { language: 'ko-KR', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiToken}`,
  },
}

function Movie() {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    axios(options)
      .then((res) => {
        setMovies(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container cnt">
      <h1>Movie</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 외부 영화 api 데이터 가져와 썸네일 목록 및 상세페이지 구성</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {movies.map((item) => (
          <MovieItem key={item.id} movieData={item} imgFullUrl={movieImgUrl + item.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default Movie
