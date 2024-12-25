import React from "react";

async function PostComments({ commentsPromise }) {
  const comments = await commentsPromise;
  return (
    <div className="mt-20">
      <h2>Comments :-</h2>

      <ul>
        {comments.map((comment, i) => (
          <li key={comment.id} className="mt-4">{`${i + 1}. ${
            comment.body
          }`}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostComments;
