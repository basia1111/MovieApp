import { NextResponse } from "next/server";
import axiosClient from "@/apiClient";

export async function GET() {
  try {
    const response = await axiosClient.get("genre/movie/list?language=en");
    return NextResponse.json({ allCategories: response.data.genres });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
