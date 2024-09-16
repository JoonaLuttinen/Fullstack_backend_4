const dummy = (blogs) => {
    return 1
}

const totalLikes = (listOfBlogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    return listOfBlogs.lenght === 0
    ? 0
    : listOfBlogs.reduce(reducer, 0)
}

const favoriteBlog = (listOfBlogs) => {
    const reducer = (sum, item) => {
        
        if (item.likes > sum.likes) {
            return item
        }
        else {
            return sum
        }
    }
    
    const mostLikedBlog = listOfBlogs.length === 0
    ? 0
    : listOfBlogs.reduce(reducer, {likes: 0})

    const orderedBlog = {
        title: mostLikedBlog.title,
        author: mostLikedBlog.author,
        likes: mostLikedBlog.likes 
    }
    
    return mostLikedBlog === 0 ?
    0
    :
    orderedBlog
}

const mostBlogs = (listOfBlogs) => {

    const reducerBlogs = (sum, item) => {
        if (sum[item.author]) {
            sum[item.author] += 1
            return sum
        }
        else {
            sum[item.author] = 1
            
            return sum
        }
    }

    

    amountOfBlogs = listOfBlogs.reduce(reducerBlogs, {})

    entries = Object.entries(amountOfBlogs)
    
    reducerMostBlogs = (sum, items) => {
        if (items[1] > sum[1] ) {
            return items
        }
        else {
            return sum
        }
    }
    
    finalResult = entries.reduce(reducerMostBlogs, [0,0])
    return {
        author: finalResult[0],
        blogs: finalResult[1]
    }
}

const authorMostLikes = (listOfBlogs) => {
    const reducerBlogs = (sum, item) => {
        if (sum[item.author]) {
            sum[item.author] += item.likes
            return sum
        }
        else {
            sum[item.author] = item.likes
            return sum
        }
    }

    listOfLikes = listOfBlogs.reduce(reducerBlogs, {})

    entries = Object.entries(listOfLikes)

    const reducerLikes = (sum, item) => {
        if (item[1] > sum[1]) {
            return item
        }
        else {
            return sum
        }
    }

    finalResult = entries.reduce(reducerLikes, [0,0])

    return {
        author: finalResult[0],
        likes: finalResult[1]
    }
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, authorMostLikes
}