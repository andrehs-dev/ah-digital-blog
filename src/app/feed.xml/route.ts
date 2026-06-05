import { getAllPosts } from "@/lib/posts";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = "https://ah-digital-blog.vercel.app";

  const items = posts
    .map(
      (p: any) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${siteUrl}/post/${p.slug}</link>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/post/${p.slug}</guid>
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AH Digital Blog</title>
    <link>${siteUrl}</link>
    <description>Artigos sobre tecnologia, finanças, produtividade e mais.</description>
    <language>pt-br</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
