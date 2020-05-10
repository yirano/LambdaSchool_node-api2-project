const express = require('express')
const Posts = require('./posts-model')

const router = express.Router()

router.post('/', (req, res) => {
  const title = req.body.title
  const contents = req.body.contents

  if (title && contents) {
    Posts.insert(req.body)
      .then(posts => {
        res.status(201).json(posts)
      })

      .catch(err => {
        res.end()
        res.status(500).json({
          error: "There was an error while saving the post to the database."
        })
      })
  } else {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    })
  }
})

router.post('/:id/comments', (req, res) => {
  const id = req.params.id
  const found = Posts.findById(Number(id))
  if (found) {
    if (!req.body.text) {
      res.status(400).json({
        errorMessage: "Please provide text for the comment."
      })
    } else {
      Posts.insertComment(req.body, id)
        .then(comment => {
          console.log(comment);
          res.status(200).json(comment)
        })
        .catch(err => {
          console.log("err", err)
          res.status(500).json({ error: "There was an error while saving the comment to the database." })
        })
    }
  } else {
    res.status(404).json({ message: "The post with the specified ID does not exist." })
  }
})

router.get('/', (req, res) => {
  Posts.find(req.query)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: "The posts information could not be retrieved"
      })
    })
})

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if (post.length > 0) {
        res.status(200).json(post)
      } else {
        res.status(404).json({
          message: "The post with the specified ID does not exist"
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: "The post information could not be retrieved."
      })
    })
})

router.get('/:id/comments', (req, res) => {
  const id = Number(req.params.id)
  Posts.findPostComments(id)
    .then(comment => {
      if (comment.length > 0) {
        res.status(200).json({ ...comment })
      } else {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: "The comments information could not be retrieved"
      })
    })
})

router.delete('/:id', (req, res) => {
  Posts.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The post has been deleted.' })
      } else {
        res.status(404).json({ message: 'The post with the specified ID does not exist.' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        error: "The post could not be removed."
      })
    })
})

router.put('/:id', (req, res) => {
  const updates = req.body
  if (!req.body.title && !req.body.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post"
    })
  } else {
    Posts.update(req.params.id, updates)
      .then(post => {
        if (post) {
          res.status(200).json(updates)
        } else {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          })
        }
      })
      .catch(err => {
        console.log('err', err)
        res.status(500).json({
          error: "The post information could not be modified."
        })
      })
  }

})

module.exports = router