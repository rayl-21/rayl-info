import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const now = new Date();
  const posts = await getCollection("post", ({ data }) => {
    return import.meta.env.DEV || data.pubDate <= now;
  });

  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: "Ray Li",
    description:
      "Writing on AI, logistics, entrepreneurship, and data science.",
    site: context.site!,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/post/${post.slug}/`,
    })),
  });
}
