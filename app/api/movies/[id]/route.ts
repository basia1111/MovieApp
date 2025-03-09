import { NextRequest, NextResponse } from "next/server";
import axiosClient from "@/apiClient";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const response = await axiosClient.get(`movie/${id}?language=en-US`);

    return NextResponse.json({
      movie: response.data,
    });
  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json({ error: "Failed to fetch movie" }, { status: 500 });
  }
}
