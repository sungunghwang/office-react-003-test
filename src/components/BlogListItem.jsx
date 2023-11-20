import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BlogListItem({ blogData }) {
  const navigate = useNavigate()
  return (
    <Link to={`/blog/${blogData.id}`}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{blogData.title}</h5>
          <p className="card-text">{blogData.content}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogListItem
