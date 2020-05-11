import React from 'react'
import Card from './Card'

const List = (props) => {
  const { posts } = props
  return (
    <>
      {posts.map(post => <Card id={post.id} post={post} handleDelete={props.handleDelete} />)}
    </>
  )
}

export default List
