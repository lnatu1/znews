import { businessNews } from "@/data/mock-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(businessNews);
}
