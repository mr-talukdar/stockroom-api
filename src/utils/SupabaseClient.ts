import { createClient } from "@supabase/supabase-js";
import {
  zodSupabaseSecretKey,
  zodSupabaseUrlSchema,
} from "../schemas/zod/schema";

const SUPABASE_URL = zodSupabaseUrlSchema.parse(process.env.SUPABASE_URL);
const SUPABASE_SECRET = zodSupabaseSecretKey.parse(process.env.SUPABASE_SECRET);

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET);

export { supabase };
