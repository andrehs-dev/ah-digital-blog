export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  readingTime: number;
}

export interface Post {
  meta: PostMeta;
  content: string;
}
