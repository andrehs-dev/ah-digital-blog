interface BlogPostSchemaProps {
  title: string
  description: string
  image: string | null | undefined
  datePublished: string
  slug: string
  wordCount: number
  tags?: string[]
}

export function BlogPostSchema({
  title,
  description,
  image,
  datePublished,
  slug,
  wordCount,
  tags,
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image ? `https://ah-digital-blog.vercel.app${image}` : undefined,
    datePublished: `${datePublished}T00:00:00-03:00`,
    dateModified: `${datePublished}T00:00:00-03:00`,
    author: {
      "@type": "Person",
      name: "André H. Silva",
      url: "https://ah-digitalsolutions.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "AH Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://ah-digital-blog.vercel.app/favicon.ico",
      },
    },
    wordCount,
    url: `https://ah-digital-blog.vercel.app/post/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ah-digital-blog.vercel.app/post/${slug}`,
    },
    keywords: tags?.join(", "),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
