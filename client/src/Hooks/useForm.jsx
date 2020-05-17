import { useState } from 'react'
import axios from 'axios'

const useForm = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState({})
  const [post, setPost] = useState(input)

  const handleSubmit = (e) => {
    setPost(input)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input);
  }

  const handleDelete = (e) => {
    axios.delete(`http://localhost:4000/api/posts/${e.target.id}`)
      .then(res => console.log('res from delete', res))
    setPosts(posts.filter(post => post.id != e.target.id))
  }

  return [input, setInput, posts, setPosts, post, setPost, handleDelete, handleChange, handleSubmit]
}

export default useForm