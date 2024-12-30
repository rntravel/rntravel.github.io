// pages/posts/[id].js
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  // ページが生成中の場合の表示
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// 生成する静的パスの指定
export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return { paths, fallback: true };
}

// 各ページで使用するデータを取得
export async function getStaticProps({ params }) {
  const posts = {
    '1': { id: '1', title: '初めてのブログ記事', content: 'これは最初のブログ記事です。' },
    '2': { id: '2', title: 'GitHub Pagesにデプロイする方法', content: 'この記事ではGitHub Pagesへのデプロイ方法について説明します。' },
  };

  const post = posts[params.id];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
