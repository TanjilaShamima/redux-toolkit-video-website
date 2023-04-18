import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Player from "../components/VideoSection/VideoDescription/Player";
import VideoDescription from "../components/VideoSection/VideoDescription/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideo/RelatedVideoList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchVideoAsync } from "../features/singleVideo/singleVideoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Pagination/Loading/Loading";

const VideoPage = () => {
  const dispatch = useAppDispatch();
  const { video, isError, isLoading, error } = useAppSelector(
    (state) => state.singleVideo
  );
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideoAsync(videoId || ""));
  }, [dispatch, videoId]);

  //decide what to render
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && !video.id) {
    content = <div className="col-span-12">No videos found</div>;
  }

  if (!isError && !isLoading && video.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <Player videoLink={video.link} title={video.title} />

          {/* <!-- video description --> */}
          <VideoDescription video={video}  />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideoList />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VideoPage;
