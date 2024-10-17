const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})
  
blogsRouter.post('/', async (request, response) => {
    logger.info(request.body)

    const blog = new Blog(request.body)

    try {
      await blog.save()
      response.status(201).json(blog)
    }
    catch(error) {
      logger.error(error)
      response.status(400).end()
    }

})

blogsRouter.delete('/:id', async (request, response) => {
  logger.info(request.body)

  try{
    await Blog.findByIdAndDelete(request.params.id)
    response.status(204).end()
  }
  catch(error){
    logger.error(error)
    response.status(400).end()
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    "title": body.title,
    "author":body.author,
    "url":body.url,
    "likes":body.likes
  }

  console.log(request.params.id);
  

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    response.json(updatedBlog)
  }
  catch (error) {
    logger.error(error)
    response.status(400).end()
  }
})

module.exports = blogsRouter