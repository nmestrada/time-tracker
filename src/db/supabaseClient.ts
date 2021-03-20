import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
// don't commit this, use environment variables
export const supabase = createClient(
  `${process.env.PUBLIC_SUPABASE_URL}`,
  `${process.env.SUPABASE_SECRET_KEY}`
);
