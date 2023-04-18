import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";
interface Props {
  title: string;
}
const Tag = ({ title }: Props) => {
  const dispatch = useAppDispatch();
  const { tags: selectedTags } = useAppSelector((state) => state.filter);
  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelect= () => {
    isSelected ? dispatch(tagRemoved(title)) : dispatch(tagSelected(title))
  }

  return (
    <div
      className={`px-4 py-1 rounded-full cursor-pointer ${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      }`}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
};

export default Tag;

// <!-- selected -->
// <div
//   className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
// >
//   redux
// </div>
