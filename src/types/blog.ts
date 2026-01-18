export interface Blog {
  id: number       
  title: string
  author?: string
  content: string
  image?: string
  date?: string
}

export interface NewBlog {
  title: string
  author?: string
  content: string
  image?: string
}
