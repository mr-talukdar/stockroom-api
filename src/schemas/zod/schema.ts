import { password } from "bun";
import z from "zod";

const zodSupabaseUrlSchema = z.url();
const zodSupabaseSecretKey = z.string().min(1, {
  error: "Supabase key cannot be empty",
});

const zodSalts = z.string();

const zodUser = z.object({
  email: z.email(),
  password: z.string().min(4).max(8),
});

export { zodSupabaseSecretKey, zodSupabaseUrlSchema, zodUser, zodSalts };
