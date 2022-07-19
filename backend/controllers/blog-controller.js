import Blog from '../model/Blog.js'

export const getAllBlogs = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find()
    } catch (err) {
        console.log(err)
    }

    if (!blogs) {
        return res.status(404).res.json({ message: "no blogs found" })
    }
    return res.status(200).json({ blogs })
}