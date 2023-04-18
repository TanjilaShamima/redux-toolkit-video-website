import axiosInstance from "../../utils/axios";

export const getTags = async () => {
  const response = await axiosInstance.get("/tags");
  console.log("response", response)
  return response.data;
};
