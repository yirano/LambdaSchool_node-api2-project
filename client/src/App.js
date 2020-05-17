import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from './Hooks/useForm/'
import List from './Components/Posts/List'
import { Write } from './Components/Form/Write'
import NavBar from './Components/Nav/Navbar'

const App = () => {
  const history = useHistory()

  const [input, setInput, posts, setPosts, post, setPost, handleDelete, handleChange, handleSubmit] = useForm()
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/posts')
      .then(res => {
        console.log("App -> res", res)
        setPosts(res.data)
        console.log(res.data)
        if (res.status === 200) {
          setTimeout(function () { history.push('/posts') })
        }
      })
      .catch(err => console.log(err))

    if (post !== undefined) {
      axios.post('http://localhost:4000/api/posts', post)
        .then(res => {
          // console.log("App -> res", res)
          setPosts(res.data)

        })
        .catch(err => console.log(err))
    }
  }, [post])


  return (
    <div>
      <NavBar />
      <Route exact path="/posts">
        <List posts={posts} handleDelete={handleDelete} />
      </Route>
      <Route exact path="/write">
        <Write post={posts} handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
      </Route>
    </div>
  )
}

export default App

