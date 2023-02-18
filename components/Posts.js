import React from "react";
import Post from "./Post";

const posts = [
  {
    name: "Amartya Sinha",
    profilepic: "/assets/profilepic1.jpg",
    image: "/assets/displaypic1.jpg",
    date: "5mins ago",
    text: "This is my first post, I am working on the front end part of this web app. The following is the tech stack: Javascript, Nextjs",
  },
  {
    name: "Jane Dow",
    profilepic: "/assets/profilepic2.jpg",
    image: "/assets/displaypic2.jpg",
    date: "24hrs ago",
    text: "This is my first post",
  },
  {
    name: "XYJJJJJJJJ OPOPOPLOPL",
    profilepic: "/assets/profilepic3.jpg",
    image: "/assets/displaypic3.jpg",
    date: "1day ago",
    text: "This is my first post",
  },
];

function Posts() {
  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.src}
          name={post.name}
          profilepic={post.profilepic}
          image={post.image}
          date={post.date}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Posts;
