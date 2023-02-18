import React from "react";
import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Amartya Sinha1",
    src: "/assets/profilepic1.jpg",
    profile: "/assets/displaypic1.jpg",
  },
  {
    name: "Amartya Sinha2",
    src: "/assets/profilepic2.jpg",
    profile: "/assets/displaypic2.jpg",
  },
  {
    name: "Amartya Sinha3",
    src: "/assets/profilepic3.jpg",
    profile: "/assets/displaypic3.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
