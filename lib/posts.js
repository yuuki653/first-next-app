import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "posts");

export function getPosts() {
  const postNames = fs.readdirSync(postsDirPath); //   postNames = 配列['first-post.md']

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);

    const result = matter(fs.readFileSync(postPath, "utf8"));

    return result.data; //return後 -> front matter内の情報の配列['title']
  });
}

export function getIds() {
  const postNames = fs.readdirSync(postsDirPath); //postNames = 配列['first-post.md']

  return postNames.map((postName) => {
    //return後 -> ['first-post']
    return {
      params: {
        id: postName.replace(/\.md$/, ""), //配列内の末尾にある'.md'を消してidにする
      },
    };
  });
}

export function getPostsById(id) {
  const postPath = path.join(postsDirPath, `${id}.md`);

  const result = matter(fs.readFileSync(postPath, "utf8"));

  return {
    id,
    ...result.data, //front matterのデータ
    content: result.content,
  };
}
