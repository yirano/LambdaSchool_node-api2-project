import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import List from './Components/Posts/List'
import { Write } from './Components/Form/Write'
import NavBar from './Components/Nav/Navbar'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      input: { title: '', contents: '' },
      post: {
        title: '',
        contents: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ post: this.state.input, input: { title: '', contents: '' } })

  }

  handleChange = (e) => {
    this.setState({ input: { ...this.state.input, [e.target.name]: e.target.value } })
  }

  handleDelete = (e) => {
    console.log(e.target.id)
    this.setState({ posts: this.state.posts.filter(post => post.id != e.target.id) })
    axios.delete(`http://localhost:4000/api/posts/${e.target.id}`)
  }

  componentWillMount() {
    axios.get('http://localhost:4000/api/posts')
      .then(res => {
        console.log("App -> componentWillMount -> res", res)
        this.setState({
          posts: res.data
        })
        console.log(this.state.posts);
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.post !== this.state.post) {
      axios.post('http://localhost:4000/api/posts', this.state.post)
        .then(res => console.log(res))
        .catch(err => console.log(err))

      axios.get('http://localhost:4000/api/posts')
        .then(res => {
          console.log("App -> componentWillMount -> res", res)
          this.setState({
            posts: res.data
          })
          console.log(this.state.posts);
        })
        .catch(err => console.log(err))
    }
  }

  componentWillUnmount() {

  }

  render() {
    console.log('post', this.state.post);
    return (
      <div>
        <NavBar />
        <Route exact path="/posts">
          <List posts={this.state.posts} handleDelete={this.handleDelete} />
        </Route>
        <Route exact path="/write">
          <Write post={this.state.posts} handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input} />
        </Route>
      </div>
    )
  }
}

export default App

