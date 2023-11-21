import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BlogListItem({ idx, blogData }) {
  const navigate = useNavigate()
  return (
    <Link to={`/blog/${blogData.id}`}>
      <div className="d-flex p-3 ps-0 mb-3 border ">
        <div className="text-center" style={{ minWidth: '50px' }}>
          {idx + 1}
        </div>
        <div className="">
          <h5 className="">{blogData.title}</h5>
          <p className="m-0">{blogData.content}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogListItem
