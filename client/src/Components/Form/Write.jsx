import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

export const Write = (props) => {

  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <TextField id="standard-basic" label="Title" name="title" onChange={e => props.handleChange(e)} value={props.input.title} />
      <TextField id="standard-basic" label="Post" name="contents" onChange={e => props.handleChange(e)} value={props.input.contents} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
