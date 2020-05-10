import React from 'react'
import Card from './Card'

const List = (props) => {
  const { posts } = props
  return (
    <div>
      {posts.map(post => <Card post={post} />)}
    </div>
  )
}

export default List
