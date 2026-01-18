import axios from "axios"
import type { Blog } from "../types/blog"

const API_URL = "http://localhost:3001/blogs"

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(API_URL)
  return res.data
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await axios.get(`${API_URL}/${id}`)
  return res.data
}

export const createBlog = async (blog: Omit<Blog, "id">) => {
  return axios.post(API_URL, blog)
}
