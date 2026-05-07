import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "./config";

export function createServerSupabaseClient() {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false
    }
  });
}
