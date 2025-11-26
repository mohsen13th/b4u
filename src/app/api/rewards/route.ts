import { NextResponse } from "next/server";

export async function GET() {
  const getRewards =
    "https://api.entekhabgroup.com/club-awards/v1/RewardPoint/GetAllRewards";

  try {
    const res = await fetch(getRewards, { cache: "no-store" });
    const data = await res.json();

    return NextResponse.json({ data: data.data });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch rewards" },
      { status: 500 }
    );
  }
}
