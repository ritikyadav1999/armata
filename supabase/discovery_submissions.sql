create table if not exists public.discovery_submissions (
  id uuid primary key default gen_random_uuid(),
  founder_name text,
  startup_name text,
  email text not null,
  phone text,
  communication_preference text,
  stage text,
  team_size text,
  startup_description text,
  bottleneck text,
  website text,
  created_at timestamptz default now()
);

alter table public.discovery_submissions enable row level security;

create policy "Allow public discovery submission inserts"
on public.discovery_submissions
for insert
to anon
with check (true);
