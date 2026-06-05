import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = "https://ah-digital-blog.vercel.app";

  const urls = posts
    .map(
      (p: any) => `
  <url>
    <loc>${siteUrl}/post/${p.slug}</loc>
    <lastmod>${new Date(p.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/tags</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  ${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
