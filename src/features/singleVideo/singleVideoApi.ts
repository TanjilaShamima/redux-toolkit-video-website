import axiosInstance from "../../utils/axios";

export const getVideo = async (id: string) => {
  const response = await axiosInstance.get(`/videos/${id}`);

  return response.data;
};
