const { test, after, describe, beforeEach } = require('node:test')
const app = require("../app")
const helper = require("./test_helper")
const Blog = require("../models/blog")
const mongoose = require("mongoose")
const supertest = require("supertest")
const assert = require("node:assert")

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

describe.only("for testingt the api", () => {
    test.only("there are the correct amount of blogs", async () => {
        const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

        assert.strictEqual(response.body.length, helper.initialBlogs.length)
    })
})


after(async () => {
  await mongoose.connection.close()
})