// http://~~.~~/posts/[id]

import Layout from "../../components/layout";
import { getIds } from "../../../lib/posts";
import { getPostsById } from "../../../lib/posts";

export const getStaticPaths = async () => {
  return {
    paths: getIds(), //return後 -> ['first-post']
    fallback: false, //記事のファイル名がないパスを指定した場合に404を表示する
  };
};

export const getStaticProps = async ({ params }) => {
  //{params}にはアクセスしたルートのidが含まれる
  return {
    props: {
      post: getPostsById(params.id),
    },
  };
};

export default function Post({ post }) {
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </Layout>
  );
}
