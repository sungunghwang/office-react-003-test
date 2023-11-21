import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const SERVER_URL = 'http://localhost:3001/posts'

function BlogModify() {
  const navigate = useNavigate()
  const { prmId } = useParams()
  const [post, setPost] = useState({
    title: '',
    content: '',
  })
  const getPosts = () => {
    axios.get(`${SERVER_URL}/${prmId}`).then((res) => {
      // setPosts(res.data)
      setPost(() => ({
        ...post,
        title: res.data.title,
        content: res.data.content,
      }))
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  const postHandler = (e) => {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }))
  }
  const submitPostHandler = (e) => {
    e.preventDefault()
    axios
      .patch(`${SERVER_URL}/${prmId}`, {
        title: post.title,
        content: post.content,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate('/blog')
        }
      })
  }

  return (
    <div className="container cnt">
      <h1>Blog</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 json-server 의 posts 데이터를 axios로 가져와 CRUD 처리</h2>

      <div className="blog-modify">
        <form onSubmit={submitPostHandler}>
          <div className="blog-write">
            <div className="mb-3">
              <label htmlFor="iptTitle" className="form-label">
                제목
              </label>
              <input type="text" className="form-control" id="iptTitle" name="title" value={post.title} onChange={postHandler} />
            </div>

            <div className="mb-3">
              <label htmlFor="tareaBody" className="form-label">
                내용 글
              </label>
              <textarea className="form-control" id="tareaBody" rows="6" name="content" value={post.content} onChange={postHandler} />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
            <button className="btn btn-primary" type="submit">
              저장
            </button>
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => {
                navigate(-1)
              }}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogModify
