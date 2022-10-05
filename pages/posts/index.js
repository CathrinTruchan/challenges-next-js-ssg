import Head from "next/head";
import Link from "next/link.js";
import { getAllPosts } from "../../services/postService";
import styled from "styled-components";

/*
 * Make all necessary imports.
 * Write the function getStaticProps.
 * Pass down your props to the component.
 * Render the data.
 */

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { posts: posts },
  };
}

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>All Posts</h1>
      <p>List of all posts</p>
      <UL>
        {posts.map((post) => {
          return (
            <ListElement key={post.id}>
              <Link href={`/posts/${post.id}`} passHref>
                <Anchor>
                  <PostContainer>{post.name}</PostContainer>
                </Anchor>
              </Link>
            </ListElement>
          );
        })}
      </UL>
    </>
  );
}

const Anchor = styled.a`
  color: limegreen;
  text-decoration: none;
  display: flex;
  &:hover {
    color: white;
  }
`;

const PostContainer = styled.div`
  background-color: blue;
  padding: 1.5rem;
  border-radius: 10px;
`;

const ListElement = styled.li`
  list-style: none;
  margin: 0 2rem 0 0;
`;

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;
