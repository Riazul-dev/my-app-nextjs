import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

async function AllPosts() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-[70vh]">
      <h1>AllPosts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="hover:text-yellow-500 duration-200"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPosts;
