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
    `CREATE TABLE IF NOT EXISTS Client (
      _id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      email TEXT,
      senha TEXT
    )`, (err) => {
      if (err) {
        return console.error(err.message);
      }

      db.run(`CREATE TABLE IF NOT EXISTS Function (
        _id INTEGER NOT NULL,
        code TEXT,
        id_client INT NOT NULL,
        PRIMARY KEY (_id, id_client),
        CONSTRAINT fk_functions_clients
          FOREIGN KEY (id_client)
          REFERENCES Client (_id)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION);
        CREATE INDEX fk_functions_clients_idx on Function (id_client ASC);
        `,
        (err) => {
          if (err) {
            return console.error(err.message)
          }

          db.close((err) => {
            if (err) {
              return console.error(err.message);
            }

            console.log("Closed the database connection.");
          });
        }
      );
    }
  );
});