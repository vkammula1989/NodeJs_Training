CREATE TABLE public.User (
   id INT PRIMARY KEY,
   login VARCHAR ( 50 ) UNIQUE NOT NULL,
   password VARCHAR ( 50) NOT NULL,
   age INT NOT NULL,
   isDeleted BOOLEAN NOT NULL
);