import React from "react";
import { Link } from "react-router-dom";
import { videoTye } from "../../../features/videos/videoSlice";

interface Props {
  video: videoTye;
}

const RelatedVideoListItem = ({ video }: Props) => {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to={`/videos/${video.id}`}>
          <img
            src={video.thumbnail}
            className="object-cover"
            alt={video.title}
          />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {video.duration}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link to={`/videos/${video.id}`}>
          <p className="text-slate-900 text-sm font-semibold">{video.title}</p>
        </Link>
        <Link
          to={`/videos/${video.id}`}
          className="text-gray-400 text-xs mt-2 hover:text-gray-600"
        >
          {video.author}
        </Link>
        <p className="text-gray-400 text-xs mt-1">
          {video.views} views . {new Date(video.date).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoListItem;
