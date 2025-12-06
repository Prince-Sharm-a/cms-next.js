import { getAuthSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json(await getAuthSession())
}