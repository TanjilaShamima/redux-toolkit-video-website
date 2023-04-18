import axiosInstance from "../../utils/axios";
import { filterTpe } from "../filter/filterSlice";

export const getVideos = async ({ tags, search }: filterTpe) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag: string) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axiosInstance.get(`/videos?${queryString}`);

  return response.data;
};
