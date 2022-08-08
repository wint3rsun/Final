DROP TABLE IF EXISTS game_challenges CASCADE;
CREATE TABLE game_challenges (
  id SERIAL PRIMARY KEY NOT NULL,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  end_date DATE NOT NULL DEFAULT CURRENT_DATE,
  progress numeric NOT NULL DEFAULT 0.00,
  quest_id integer REFERENCES quests(id) ON DELETE CASCADE NOT NULL
);