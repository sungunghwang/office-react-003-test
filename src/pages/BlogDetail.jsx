import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const SERVER_URL = 'http://localhost:3001/posts'

function BlogDetail() {
  const navigate = useNavigate()
  const { prmId } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const getPosts = () => {
    axios.get(`${SERVER_URL}/${prmId}`).then((res) => {
      setPosts(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deletePostHandler = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      axios.delete(`${SERVER_URL}/${prmId}`).then((res) => {
        navigate('/blog')
      })
    }
  }

  return (
    <div className="container cnt">
      <h1>Blog</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 json-server 의 posts 데이터를 axios로 가져와 CRUD 처리</h2>
      <div className="blog-detail">
        <h3>{posts.title}</h3>
        <p className="mt-3">{posts.content}</p>

        {loading ? (
          ` `
        ) : (
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
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                navigate(`/blog/modify/${posts.id}`)
              }}
            >
              수정
            </button>
            <button className="btn btn-danger" type="button" onClick={deletePostHandler}>
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogDetail
