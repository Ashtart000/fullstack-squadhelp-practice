
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES "Users"(id) NOT NULL,
  body TEXT NOT NULL,
  conversation_id INTEGER REFERENCES conversations(id) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users_to_conversation (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "Users"(id) NOT NULL,
    conversation_id INTEGER REFERENCES conversations(id) NOT NULL,
    black_list BOOLEAN DEFAULT FALSE,
    favorite_list BOOLEAN DEFAULT FALSE
);

CREATE TABLE catalogs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES "Users"(id) NOT NULL,
  catalog_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conversations_to_catalogs (
    id SERIAL PRIMARY KEY,
    catalog_id INTEGER REFERENCES catalogs(id) NOT NULL,
    conversation_id INTEGER REFERENCES conversations(id) NOT NULL
);
