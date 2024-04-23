import { type NextRequest, NextResponse } from 'next/server'

import article from "@/app/data/article-2403311.json"
export async function GET(request: NextRequest) {
  try {

    const response = {data: article}
  
    return NextResponse.json({...response});

  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }


}
export const dynamic = "force-dynamic";