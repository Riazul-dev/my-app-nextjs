import PostComments from "@/app/components/PostComments";
import getAllPosts from "@/lib/getAllPosts";
import getComments from "@/lib/getComments";
import getPost from "@/lib/getPost";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({ id: post.id.toString()}));
}

async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);
  const commentsPromise = getComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className="min-h-[70vh]">
      <h1 className="text-xl text-white">{post.title}</h1>
      <p className="text-slate-500">{post.body}</p>
      <Suspense fallback="<h1>Loading comments...</h1>">
        <PostComments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export default Post;
