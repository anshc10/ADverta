/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `scheduled_date` (date)
      - `scheduled_time` (text)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `interests` (text array)
      - `status` (text)
      - `notes` (text)

  2. Security
    - Enable RLS
    - Add policies for admin access
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  scheduled_date date NOT NULL,
  scheduled_time text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  interests text[] DEFAULT '{}',
  status text DEFAULT 'pending',
  notes text,
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin full access"
  ON demo_requests
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin'
  ));