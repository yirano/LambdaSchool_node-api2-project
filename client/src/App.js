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

  componentWillMount() {
    axios.get('http://localhost:4000/api/posts')
      .then(res => {
        console.log("App -> componentWillMount -> res", res)
        this.setState({
          posts: res.data
        })
        console.log(this.state.posts);
      })
  }

  render() {
    console.log('post', this.state.post);
    return (
      <div>
        <NavBar />
        <Route exact path="/posts">
          <List posts={this.state.posts} />
        </Route>
        <Route exact path="/write">
          <Write post={this.state.posts} handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input} />
        </Route>
      </div>
    )
  }
}

export default App

