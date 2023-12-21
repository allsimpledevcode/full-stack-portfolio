import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()
 
  return Response.json(notes)
}