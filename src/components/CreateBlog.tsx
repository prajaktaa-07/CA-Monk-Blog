import React, { useState } from "react";
import type { NewBlog } from "../types/blog";
import { createBlog } from "../services/blogApi"; // only import once
import Button from "./ui/button";
import Input from "./ui/input";

interface CreateBlogProps {
  onBlogCreated: () => void;
}

const CreateBlog: React.FC<CreateBlogProps> = ({ onBlogCreated }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    // create payload object for the API
    const payload: NewBlog = {
      title,
      author: author || undefined,
      content,
      image: image || undefined,
    };

    // call the API
    await createBlog(payload);

    // reset form
    setTitle("");
    setAuthor("");
    setContent("");
    setImage("");
    setShowForm(false);

    onBlogCreated();
  };

  return (
    <div className="relative max-w-xl mx-auto mt-4">
      {/* Toggle button */}
      <div className="flex justify-end mb-2">
        <Button
          type="button"
          className="btn-add-small"
          onClick={() => setShowForm(!showForm)}
        >
          ➕ New Blog
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="card mt-2 space-y-3">
          <Input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            placeholder="Write your blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2"
          />
          <Button type="submit" className="btn-add">
            Create Blog
          </Button>
        </form>
      )}
    </div>
  );
};

export default CreateBlog;
