DROP TABLE IF EXISTS followers CASCADE;
CREATE TABLE followers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  followed integer REFERENCES users(id) ON DELETE CASCADE,
  followers integer REFERENCES users(id) ON DELETE CASCADE
);