-- 1) Enable RLS
alter table public.challenge enable row level security;
alter table public.goals enable row level security;
alter table public.goal_completions enable row level security;
alter table public.daily_logs enable row level security;
alter table public.weekly_logs enable row level security;
alter table public.user_settings enable row level security;

-- 2) Drop existing policies if they already exist

drop policy if exists challenge_select_own on public.challenge;
drop policy if exists challenge_insert_own on public.challenge;
drop policy if exists challenge_update_own on public.challenge;
drop policy if exists challenge_delete_own on public.challenge;

drop policy if exists user_settings_select_own on public.user_settings;
drop policy if exists user_settings_insert_own on public.user_settings;
drop policy if exists user_settings_update_own on public.user_settings;
drop policy if exists user_settings_delete_own on public.user_settings;

drop policy if exists goals_select_own on public.goals;
drop policy if exists goals_insert_own on public.goals;
drop policy if exists goals_update_own on public.goals;
drop policy if exists goals_delete_own on public.goals;

drop policy if exists goal_completions_select_own on public.goal_completions;
drop policy if exists goal_completions_insert_own on public.goal_completions;
drop policy if exists goal_completions_update_own on public.goal_completions;
drop policy if exists goal_completions_delete_own on public.goal_completions;

drop policy if exists daily_logs_select_own on public.daily_logs;
drop policy if exists daily_logs_insert_own on public.daily_logs;
drop policy if exists daily_logs_update_own on public.daily_logs;
drop policy if exists daily_logs_delete_own on public.daily_logs;

drop policy if exists weekly_logs_select_own on public.weekly_logs;
drop policy if exists weekly_logs_insert_own on public.weekly_logs;
drop policy if exists weekly_logs_update_own on public.weekly_logs;
drop policy if exists weekly_logs_delete_own on public.weekly_logs;

-- 3) Owner policies (authenticated users only)

create policy challenge_select_own on public.challenge
for select to authenticated
using (auth.uid()::text = user_id);

create policy challenge_insert_own on public.challenge
for insert to authenticated
with check (auth.uid()::text = user_id);

create policy challenge_update_own on public.challenge
for update to authenticated
using (auth.uid()::text = user_id)
with check (auth.uid()::text = user_id);

create policy challenge_delete_own on public.challenge
for delete to authenticated
using (auth.uid()::text = user_id);

create policy user_settings_select_own on public.user_settings
for select to authenticated
using (auth.uid()::text = user_id);

create policy user_settings_insert_own on public.user_settings
for insert to authenticated
with check (auth.uid()::text = user_id);

create policy user_settings_update_own on public.user_settings
for update to authenticated
using (auth.uid()::text = user_id)
with check (auth.uid()::text = user_id);

create policy user_settings_delete_own on public.user_settings
for delete to authenticated
using (auth.uid()::text = user_id);

create policy goals_select_own on public.goals
for select to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goals.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goals_insert_own on public.goals
for insert to authenticated
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = goals.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goals_update_own on public.goals
for update to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goals.challenge_id
      and c.user_id = auth.uid()::text
  )
)
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = goals.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goals_delete_own on public.goals
for delete to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goals.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goal_completions_select_own on public.goal_completions
for select to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goal_completions.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goal_completions_insert_own on public.goal_completions
for insert to authenticated
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = goal_completions.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goal_completions_update_own on public.goal_completions
for update to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goal_completions.challenge_id
      and c.user_id = auth.uid()::text
  )
)
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = goal_completions.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy goal_completions_delete_own on public.goal_completions
for delete to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = goal_completions.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy daily_logs_select_own on public.daily_logs
for select to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = daily_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy daily_logs_insert_own on public.daily_logs
for insert to authenticated
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = daily_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy daily_logs_update_own on public.daily_logs
for update to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = daily_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
)
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = daily_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy daily_logs_delete_own on public.daily_logs
for delete to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = daily_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy weekly_logs_select_own on public.weekly_logs
for select to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = weekly_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy weekly_logs_insert_own on public.weekly_logs
for insert to authenticated
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = weekly_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy weekly_logs_update_own on public.weekly_logs
for update to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = weekly_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
)
with check (
  exists (
    select 1
    from public.challenge c
    where c.id = weekly_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);

create policy weekly_logs_delete_own on public.weekly_logs
for delete to authenticated
using (
  exists (
    select 1
    from public.challenge c
    where c.id = weekly_logs.challenge_id
      and c.user_id = auth.uid()::text
  )
);
