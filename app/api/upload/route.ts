import { createClient } from "@/utils/supabase/server";
import { cookies, headers } from "next/headers";

export async function POST(request: Request){
    const bucketName = 'images';
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    
    const file = await request.blob();
    const header = headers();
    const fileName = header.get("X-Vercel-Filename");

    await supabase.storage.from(bucketName).upload(fileName, file);

    const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);

    return Response.json({
        url: data.publicUrl
    })
} 