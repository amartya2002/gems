import Image from "next/image";

function StoryCard({name, src, profile}) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-34 lg:w-34 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 z-50 w-6 h-6 top-2 left-2 rounded-full"
        src={profile}
        width={40}
        height={40}
        alt="stories author image"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt="stories image"

        layout="fill"
      />
    </div>
  );
}

export default StoryCard;
