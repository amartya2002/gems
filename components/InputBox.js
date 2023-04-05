import React, { useRef, useState } from "react";
import Image from "next/image";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

import {
  VideoCameraIcon,
  EllipsisHorizontalCircleIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const docRef = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      timestamp: serverTimestamp(),
      image:session.user.image,
    });

    if (imageToPost) {
      const imageRef = ref(storage, `posts/${docRef.id}`);
      const uploadTask = uploadString(imageRef, imageToPost, "data_url");
      removeImage();

      uploadTask.then(async (snapshot) => {
        const url = await getDownloadURL(imageRef);
        const postRef = doc(db, "posts", docRef.id);
        await setDoc(postRef, { postImage: url }, { merge: true });
      }).catch((error) => {
        console.error(error);
      });
    }

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-50 text-grey-500 font-medium mt-6  max-w-sm mx-auto">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className=" w-9 h-9 rounded-full -ml-1 "
          src={session.user.image}
          height={40}
          width={40}
          alt="User Image"
        />
        <form className="flex flex-1">
          <input
            className="rounded-2xl h-12 bg-slate-100 flex-grow px-4   "
            type="text"
            ref={inputRef}
            placeholder="What's up!!!"
          />
          <button hidden type="submit" onClick={sendPost}></button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="  flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <Image className="  object-contain "  width={64} height={10} src={imageToPost} alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-1 border-t ">
        <div 
          onClick={() => filePickerRef.current.click()}
          className="inputIcon "
        >
          <CameraIcon className="h-6 text-red-400 " />
          <p className="text-xs sm:text-sm  text-slate-700 ">Photo</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <EllipsisHorizontalCircleIcon className="h-6 text-green-400   " />
          <p className="text-xs sm:text-sm  text-slate-700">More</p>
        </div>

        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-orange-400" />
          <p className="text-xs sm:text-sm  text-slate-700">Video</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
