import type { Blog } from "../types/blog"

interface Props {
  blogs: Blog[]
  onView: (blog: Blog) => void  // pass full blog instead of id
}

export default function BlogList({ blogs, onView }: Props) {
  return (
    <>
      {blogs.map((blog, index) => (
        <div key={`${blog.id}-${index}`} className="card blog-card">
          <h3 className="text-lg font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-500">
            By {blog.author ?? "Unknown"}
          </p>
          <button
            className="btn-primary mt-4"
            onClick={() => onView(blog)}  
          >
            View
          </button>
        </div>
      ))}
    </>
  )
}
