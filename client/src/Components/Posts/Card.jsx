import React from 'react'

const Card = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.contents}</p>
    </div>
  )
}

export default Card
