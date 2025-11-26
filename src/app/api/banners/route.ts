import { NextResponse } from "next/server";

export async function GET() {
  const getBanners = "https://api.entekhabgroup.com/club-awards/v1/SiteBanner/GetSiteBanner";

  try {
    const res = await fetch(getBanners);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch banners" },
      { status: 500 }
    );
  }
}
