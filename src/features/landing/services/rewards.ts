import axios from "axios";
import { RewardItem } from "../types/reward";

export const getRewards = async (): Promise<RewardItem[]> => {
  const res = await axios.get("/api/rewards");
  return res.data.data;
};
