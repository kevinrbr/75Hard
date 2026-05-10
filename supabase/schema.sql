create table if not exists challenge (
  id text primary key,
  user_id text not null,
  name text not null,
  start_date date not null,
  duration_days int not null default 75,
  active_day int not null default 1,
  status text not null check (status in ('active', 'completed', 'paused')),
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table if not exists goals (
  id text primary key,
  challenge_id text not null references challenge(id) on delete cascade,
  title text not null,
  description text,
  type text not null check (type in ('daily', 'weekly')),
  unit text,
  target_value numeric,
  icon text not null,
  status text not null check (status in ('active', 'inactive')),
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table if not exists goal_completions (
  id text primary key,
  challenge_id text not null references challenge(id) on delete cascade,
  goal_id text not null references goals(id) on delete cascade,
  completion_date date not null,
  value numeric,
  completed boolean not null default false,
  type text not null check (type in ('daily', 'weekly')),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  unique(goal_id, completion_date, type)
);

create table if not exists daily_logs (
  id text primary key,
  challenge_id text not null references challenge(id) on delete cascade,
  date date not null,
  completed_goals int not null,
  total_goals int not null,
  status text not null check (status in ('complete', 'partial', 'missed', 'future')),
  notes text,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  unique(challenge_id, date)
);

create table if not exists weekly_logs (
  id text primary key,
  challenge_id text not null references challenge(id) on delete cascade,
  week_start_date date not null,
  completed_goals int not null,
  total_goals int not null,
  status text not null check (status in ('complete', 'partial', 'missed')),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  unique(challenge_id, week_start_date)
);

create table if not exists user_settings (
  id text primary key,
  user_id text not null,
  timezone text not null,
  notifications_enabled boolean not null default true,
  backup_enabled boolean not null default false,
  preferred_theme text not null check (preferred_theme in ('light', 'dark', 'system')),
  created_at timestamptz not null,
  updated_at timestamptz not null
);
