import { NextRequest, NextResponse } from "next/server";
import axiosClient from "@/apiClient";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const response = await axiosClient.get(`discover/movie?&with_genres=${id}`);

    return NextResponse.json({
      movies: response.data,
    });
  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json({ error: "Failed to fetch movie" }, { status: 500 });
  }
}
