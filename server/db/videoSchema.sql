DROP DATABASE glaze;
CREATE DATABASE glaze;

USE glaze;

CREATE TABLE videos (
  id int NOT NULL,
  query varchar(100) NOT NULL,
  videoId int NOT NULL,
  PRIMARY KEY (id)

);
