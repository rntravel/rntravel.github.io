// app/page.jsx
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>私のブログ</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
