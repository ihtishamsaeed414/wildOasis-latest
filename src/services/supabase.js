import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dstkmaydfezetenylhqt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzdGttYXlkZmV6ZXRlbnlsaHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3ODEzMjYsImV4cCI6MjA0MTM1NzMyNn0.rRd-_r-xDyvZKBuKLsL1HLoDgyVZXf9C_2lkv30zw5w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
