import axios from "axios"
import type { Blog } from "../types/blog"

const API_URL = "http://localhost:3001/blogs"

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get<Blog[]>(API_URL)
  return response.data
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const response = await axios.get<Blog>(`${API_URL}/${id}`)
  return response.data
}

export const createBlog = async (
  blog: Omit<Blog, "id">
): Promise<Blog> => {
  const response = await axios.post<Blog>(API_URL, blog)
  return response.data
}

export const deleteBlog = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`)
}
