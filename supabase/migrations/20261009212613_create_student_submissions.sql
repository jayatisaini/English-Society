/*
# Create Student Corner submissions

1. New Tables
- `student_submissions`
- `id` (uuid, primary key)
- `student_name` (text, submitted display name)
- `class_section` (text, submitted class and section)
- `submission_type` (text, one of the public literary categories)
- `title` (text, work title)
- `content` (text, full submitted piece)
- `created_at` (timestamptz, publication time)

2. Security
- Enable row-level security on the shared public submissions table.
- Allow anonymous and signed-in visitors to read, publish, update, and delete submissions because this is a shared school literary feed without accounts.

3. Important Notes
- The website applies the requested presentation-only admin PIN before showing delete controls.
- This table intentionally has no user ownership column because the requested experience has no sign-in flow and is a single shared society feed.
*/

CREATE TABLE IF NOT EXISTS public.student_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  class_section text NOT NULL,
  submission_type text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.student_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read student submissions" ON public.student_submissions;
CREATE POLICY "Public can read student submissions"
  ON public.student_submissions FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public can publish student submissions" ON public.student_submissions;
CREATE POLICY "Public can publish student submissions"
  ON public.student_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update student submissions" ON public.student_submissions;
CREATE POLICY "Public can update student submissions"
  ON public.student_submissions FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can delete student submissions" ON public.student_submissions;
CREATE POLICY "Public can delete student submissions"
  ON public.student_submissions FOR DELETE
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS student_submissions_created_at_idx
  ON public.student_submissions (created_at DESC);