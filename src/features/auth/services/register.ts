import axios from "axios";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    console.log(data)
    const res = await axios.post("/api/auth/register", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.error || err.message);
  }
};
