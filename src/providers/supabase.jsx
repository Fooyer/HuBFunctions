import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.API_KEY
const supabaseKey = process.env.URL_BANCO
export const supabase = createClient(supabaseUrl, supabaseKey)