// Import Create Client from DataBase

import { createClient } from "@supabase/supabase-js"

// Take Admin Token and Adress Variables

const supabaseUrl = process.env.REACT_APP_URL_BANCO
const supabaseKey = process.env.REACT_APP_API_KEY_ADMIN

// Export DataBase Admin Connection

export const supabase = createClient(supabaseUrl, supabaseKey)