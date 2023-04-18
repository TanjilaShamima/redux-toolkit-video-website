import React from "react";

interface Props {
  like: number;
  unlike: number;
}

const LikeUnlike = ({like, unlike}: Props) => {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src="/assets/like.svg" alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{like}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src="/assets/unlike.svg" alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{unlike}</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
