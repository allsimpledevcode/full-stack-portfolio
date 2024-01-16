import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { count: projectCount } = await supabase.from("projects").select("*", { count: "exact", head: true });
    const { count: blogCount } = await supabase.from("blogs").select("*", { count: "exact", head: true });

    return Response.json({
        project: projectCount,
        blog: blogCount
    })
}