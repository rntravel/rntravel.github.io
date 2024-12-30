// app/posts/[id]/page.jsx
import { notFound } from 'next/navigation';
import { getPostById, getAllPosts } from '../../../lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link href="/">← ホームに戻る</Link>
    </div>
  );
}
