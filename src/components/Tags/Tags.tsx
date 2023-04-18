import React, { useEffect } from "react";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);
  return (
    <>
      {tags.length > 0 ? (
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {/* <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
          react
        </div> */}
            {/* <!-- selected --> */}
            {tags.map((tag) => (
              <Tag key={tag.id} title={tag.title} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Tags;
