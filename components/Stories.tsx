import React from "react";
import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Amartya Sinha1",
    src: "/assets/pexels-steve-johnson-1269968.jpg",
    profile: "/assets/displaypic1.jpg",
  },
  {
    name: "Amartya Sinha2",
    src: "/assets/pexels-juan-pablo-serrano-arenas-904276.jpg",
    profile: "/assets/displaypic2.jpg",
  },
  {
    name: "Amartya Sinha3",
    src: "/assets/pexels-anni-roenkae-2860807.jpg",
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
