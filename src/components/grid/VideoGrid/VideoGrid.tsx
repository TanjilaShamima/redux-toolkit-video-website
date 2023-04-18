import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem/VideoGridItem";
import { fetchVideosAsync } from "../../../features/videos/videoSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useAppSelector } from "../../../app/hooks";
import Loading from "../../ui/Pagination/Loading/Loading";

const VideoGrid = () => {
  const dispatch = useAppDispatch();
  const { videos, isError, isLoading, error } = useAppSelector(
    (state) => state.videos
  );
  const { tags, search } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideosAsync({ tags: tags, search: search }));
  }, [dispatch, tags, search]);

  //decide what to render
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((v) => <VideoGridItem key={v.id} video={v} />);
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}
          {/* <!-- error section */}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
