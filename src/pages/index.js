import Link from "next/link";

import Layout from "@/components/layout";
import { getPosts } from "../../lib/posts";

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(), //return後 -> front matter内の情報の配列['title']
    },
  };
};

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">About</Link>
      <ul>
        {posts.map(({ title, id }) => {
          return (
            <li>
              <Link href={`posts/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
