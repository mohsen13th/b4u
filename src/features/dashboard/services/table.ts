import axios from "axios";
import { Movie } from "../types/table";

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
  const { data } = await axios.get(`/api/movies?page=${page}`);
  return data.data;
};
