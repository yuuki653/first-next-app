import Link from "next/link";

import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout pageTitle="About">
      <h1>About</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
}
