DROP TABLE IF EXISTS toDoList;
CREATE TABLE toDoList (
  id SERIAL PRIMARY KEY,
  task VARCHAR,
  complete BOOLEAN
);

INSERT INTO toDoList VALUES(default, 'buy milk', FALSE );
INSERT INTO toDoList VALUES(default, 'blah', FALSE );
