import axiosInstance from "../../utils/axios";
import { relatedVideosParams } from "./relatedVideosSlice";

export const getRelatedVideos = async ({ tags, id }: relatedVideosParams) => {
  const limit = 5;
  let queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;
  const response = await axiosInstance(`/videos?${queryString}`);
  return response.data;
};
