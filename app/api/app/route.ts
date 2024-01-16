import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { count: projectCount } = await supabase.from("projects").select("*", { count: "exact", head: true });
    const { count: blogCount } = await supabase.from("blogs").select("*", { count: "exact", head: true });

    return NextResponse.json({
        project: projectCount,
        blog: blogCount
    })
}