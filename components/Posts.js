import { collection, doc, getDocs, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import Post from "./Post";
import { db, storage } from "../firebase";

function Posts() {
  const postsRef = collection(db, "posts");
  const postsQuery = query(postsRef, orderBy("timestamp", "desc"));
  const [realtimePosts] = useCollection(postsQuery);
  console.log(realtimePosts, "hello");

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.data().name}
          message={post.data().message}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
