import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchRelatedVideosAsync } from "../../../features/relatedVideos/relatedVideosSlice";
import Loading from "../../ui/Pagination/Loading/Loading";

interface Props {
  tags: string[];
  currentVideoId: string;
}

const RelatedVideoList = ({ tags, currentVideoId }: Props) => {
  const dispatch = useAppDispatch();
  const { relatedVideos, isLoading, isError, error } = useAppSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  //decide what to render'
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No videos found</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos.map((v) => (
      <RelatedVideoListItem key={v.id} video={v} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideoList;
