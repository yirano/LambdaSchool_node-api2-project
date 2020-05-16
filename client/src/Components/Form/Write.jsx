import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export const Write = (props) => {

  return (
    <form
      onSubmit={e => props.handleSubmit(e)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto'
      }}>
      <TextField
        id="standard-basic"
        label="Title"
        name="title"
        onChange={e => props.handleChange(e)}
        value={props.input.title}
        style={{ width: '80%' }}
      />
      <TextField
        id="standard-basic"
        label="Post"
        name="contents"
        onChange={e => props.handleChange(e)}
        value={props.input.contents}
        style={{ width: '80%' }}
      />
      <Button type="submit">Submit</Button>
    </form >
  )
}
