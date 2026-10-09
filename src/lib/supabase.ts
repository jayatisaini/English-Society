import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL  as string;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnon);

export interface StudentSubmission {
  id: string;
  student_name: string;
  class_section: string;
  submission_type: string;
  title: string;
  content: string;
  created_at: string;
}
