// app/api/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "فیلدهای نام، ایمیل و پسورد الزامی هستند" }, { status: 400 });
    }

    const response = await axios.post("https://moviesapi.ir/api/v1/register", {
      name,
      email,
      password,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json(response.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.response?.data?.message || err.message }, { status: err.response?.status || 500 });
  }
}
