import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6">
      
      <div>
        {/* stories */}
        <Stories />
        {/* input box */}
        <InputBox/>
        {/* posts */}
        <Posts/>
      </div>
    </div>
  );
}

export default Feed;
