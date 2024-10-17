const { test, after, describe, beforeEach } = require('node:test')
const app = require("../app")
const helper = require("./test_helper")
const Blog = require("../models/blog")
const mongoose = require("mongoose")
const supertest = require("supertest")
const assert = require("node:assert")
const { log } = require('node:console')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

describe.only("for testingt the api", () => {
    test("there are the correct amount of blogs", async () => {
        const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

        assert.strictEqual(response.body.length, helper.initialBlogs.length)
    })

    test("returned blogs have id field", async () => {
        const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

        response.body.forEach(b => {assert(b.hasOwnProperty('id'))})
    })

    test("New blog is added correctly", async () => {
        await api
        .post('/api/blogs')
        .send(helper.addedBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

        response = await api
        .get('/api/blogs')
        
        titles = response.body.map(t => t.title)
        
        assert.strictEqual(response.body.length, helper.initialBlogs.length +1)
        assert(titles.includes("video games and aggression"))

    })

    test("Missing like field will be filled with 0 automatically", async () => {
        await api
        .post('/api/blogs')
        .send(helper.addedBlogWithoutLikes)
        .expect(201)
        .expect('Content-Type', /application\/json/)

        response = await api
        .get('/api/blogs')

        const addedBlogAuthor = response.body.find(b => b.author === 'Tobias Greitemeyer')

        assert.strictEqual(addedBlogAuthor.likes, helper.addedBlogLikesZero.likes)
    })

    test('gives status 400 if title is missing', async () => {
        await api
        .post('/api/blogs')
        .send(helper.noTitle)
        .expect(400)

    })

    test('gives status 400 if url is missing', async () => {
        await api
        .post('/api/blogs')
        .send(helper.noUrl)
        .expect(400)

    })

    test("Deleting a single blog based on id", async () => {
        await api
        .post('/api/blogs')
        .send(helper.addedBlog)
        .expect(201)
        
        response = await api
        .get('/api/blogs')

        const addedBlog = response.body.find(b => b.author === 'Tobias Greitemeyer')
        

        await api
        .delete(`/api/blogs/${addedBlog.id}`)
        .expect(204)
    })

    test.only('Updating an existing blog', async () => {
        await api
        .post('/api/blogs')
        .send(helper.addedBlog)
        .expect(201)
        
        response = await api
        .get('/api/blogs')

        const addedBlog = response.body.find(b => b.author === 'Tobias Greitemeyer')

        await api
        .put(`/api/blogs/${addedBlog.id}`)
        .send(helper.updatedBlog)
        .expect(200)
    })
})


after(async () => {
  await mongoose.connection.close()
})