import React from 'react'
import { Card as ReactCard, CardTitle, CardText } from 'reactstrap'
import { Button } from '@material-ui/core'


const Card = ({ post, handleDelete }) => {
  // console.log(post.id);
  return (
    <ReactCard style={{ padding: '20px', margin: '20px 120px' }}>
      <div id={post.id}>
        <CardTitle>{post.title}</CardTitle>
        <CardText>{post.contents}</CardText>
        <Button onClick={e => handleDelete(e)}><span id={post.id}>Delete</span></Button>
      </div>
    </ReactCard>
  )
}

export default Card
