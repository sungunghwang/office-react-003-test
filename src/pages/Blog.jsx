import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BlogListItem from '../components/BlogListItem'

const SERVER_URL = 'http://localhost:3001/posts'

function Blog() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get(SERVER_URL).then((res) => {
      setPosts(res.data)
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container cnt">
      <h1>Blog</h1>
      <br />
      <br />
      <h2 className="mb-5">🎁 json-server 의 posts 데이터를 axios로 가져와 CRUD 처리</h2>
      <div className="blog-list">
        {posts.map((arr) => (
          <BlogListItem key={arr.id} blogData={arr} />
        ))}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            navigate('/blog/write')
          }}
        >
          글쓰기
        </button>
      </div>
    </div>
  )
}

export default Blog
