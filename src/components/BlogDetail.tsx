import type { Blog } from "../types/blog"

interface Props {
  blog: Blog | null
}

export default function BlogDetail({ blog }: Props) {
  if (!blog) {
    return (
      <div className="blog-detail empty flex items-center justify-center">
  <div className="empty-box text-center p-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg animate-softPop">
    <span className="text-6xl mb-4 block animate-bounce">📖</span>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      Select a blog to view details
    </h3>
  
  </div>
</div>

    )
  }

  return (
    <div className="blog-detail">
      {blog.image?.trim() && (
        <img src={blog.image} alt={blog.title} className="blog-image" />
      )}
      <h1>{blog.title}</h1>
      {blog.author && (
        <div className="mb-4 text-sm text-gray-600">
          By <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">{blog.author}</span>
        </div>
      )}
      <hr />
      <div className="content">{blog.content}</div>
    </div>
  )
}
