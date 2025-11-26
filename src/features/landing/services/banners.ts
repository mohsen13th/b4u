import axios from "axios";
import { Banner } from "../types/banner";

export const getBanners = async (): Promise<Banner[]> => {
  const res = await axios.get("/api/banners");
  return res.data.data;
};
