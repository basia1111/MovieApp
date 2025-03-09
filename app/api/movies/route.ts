import { NextResponse } from "next/server";
import axiosClient from "@/apiClient";

export async function GET() {
  try {
    const response = await axiosClient.get("discover/movie?page=1&sort_by=popularity.desc");
    return NextResponse.json({ allMovies: response.data });
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}
