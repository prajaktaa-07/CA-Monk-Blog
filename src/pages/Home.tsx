import { useEffect, useState } from "react"
import { getBlogs } from "../services/blogApi"
import type { Blog } from "../types/blog"

import BlogList from "../components/BlogList"
import BlogDetail from "../components/BlogDetail"
import CreateBlog from "../components/CreateBlog"

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  const fetchBlogs = async () => {
    try {
      const data = await getBlogs()
      const fixedData = data.map((blog, index) => ({
        ...blog,
        id: Number(blog.id) 
      }))
      setBlogs(fixedData)
      // removed automatic selection of first blog
    } catch (error) {
      console.error("Error fetching blogs:", error)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleView = (blog: Blog) => {
    setSelectedBlog(blog)
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center my-6 text-purple-600">
        Explore the World of Blogs
      </h1>

      <div className="mb-8">
        <CreateBlog onBlogCreated={fetchBlogs} />
      </div>

      <div className="flex gap-6">
        <div className="w-1/3">
          <BlogList blogs={blogs} onView={handleView} />
        </div>
        <div className="w-2/3">
          <BlogDetail blog={selectedBlog} />
        </div>
      </div>
    </div>
  )
}

export default Home
