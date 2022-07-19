import express from "express";
import { getAllBlogs } from '../controllers/blog-controller.js'
const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)

export default blogRouter