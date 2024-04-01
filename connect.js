const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS Clients (
      id TEXT NOT NULL PRIMARY KEY,
      username TEXT,
      email TEXT,
      senha TEXT,
      languages TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        return console.error(err.message);
      }
    }
  );

  db.run(`CREATE TABLE IF NOT EXISTS Languages (
    id TEXT NOT NULL PRIMARY KEY,
    name TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) {
        return console.error(err.message)
      }
    }
  );

  db.run(`CREATE TABLE IF NOT EXISTS Functions (
    id TEXT NOT NULL,
    id_language TEXT NOT NULL,
    code TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, id_language),
    CONSTRAINT fk_functions_languages
      FOREIGN KEY (id_language)
      REFERENCES Languages (id)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);
    CREATE INDEX fk_functions_languages_idx on Functions (id_language ASC);
    `, (err) => {
      if (err) {
        return console.error(err.message)
      }
    }
  );

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }

    console.log("Closed the database connection.");
  });
});