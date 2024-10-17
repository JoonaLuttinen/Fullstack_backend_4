const initialBlogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    }
]

const addedBlog = {
  "title": "video games and aggression",
  "author": "Tobias Greitemeyer",
  "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6790614/",
  "likes": 2
}

const addedBlogWithoutLikes = {
  "title": "video games and aggression",
  "author": "Tobias Greitemeyer",
  "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6790614/"
}

const addedBlogLikesZero = {
  "title": "video games and aggression",
  "author": "Tobias Greitemeyer",
  "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6790614/",
  "likes": 0
}

const noTitle = {

  "author": "Tobias Greitemeyer",
  "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6790614/",
  "likes": 2

}

const noUrl = {
  "title": "video games and aggression",
  "author": "Tobias Greitemeyer",
  "likes": 0
}

const updatedBlog = {
  "title": "video games and aggression",
  "author": "Tobias Greitemeyer",
  "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6790614/",
  "likes": 5

}

module.exports = {initialBlogs, addedBlog, addedBlogWithoutLikes, addedBlogLikesZero, noTitle, noUrl, updatedBlog}