import { notFound } from "next/navigation";

const posts = [
  {
    slug: "how-to-choose-tools",
    title: "How to choose tools without adding complexity",
    body: "Pick tools by workflow fit, not popularity alone. Start with the job-to-be-done, your budget, collaboration needs, data ownership requirements, and migration cost."
  },
  {
    slug: "building-professional-stacks",
    title: "Building professional stacks for repeatable workflows",
    body: "A good stack covers the complete lifecycle: capture, create, collaborate, automate, publish, measure, and improve. Tool Empir stacks are designed to show that full path."
  }
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title || "Blog" };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 py-14">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
