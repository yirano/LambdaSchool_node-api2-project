import React from 'react'
import { Button } from '@material-ui/core'

const Card = ({ post, handleDelete }) => {
  console.log(post.id);
  return (
    <div id={post.id}>
      <h3>{post.title}</h3>
      <p>{post.contents}</p>
      <button id={post.id} onClick={e => handleDelete(e)}>Delete</button>
    </div>
  )
}

export default Card
