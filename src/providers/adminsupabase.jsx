import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_APP_URL_BANCO
const supabaseKey = process.env.REACT_APP_API_KEY_ADMIN

export const supabase = createClient(supabaseUrl, supabaseKey)