CREATE TABLE tb_movie (
    userId SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    genre VARCHAR(50) NOT NULL,
    director VARCHAR(70) NOT NULL,
    year VARCHAR(4) NOT NULL,

);



