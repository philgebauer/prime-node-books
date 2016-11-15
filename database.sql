CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) UNIQUE NOT NULL,
  author VARCHAR(50) NOT NULL,
  page_count BIGINT NOT NULL,
  published DATE NOT NULL
);

INSERT INTO books (title, author, page_count, published)
VALUES ('Harry Potter and the Chamber of Secrets', 'JK Rowling', 238, '6-26-1999'),
('Harry Potter and the Prisoner of Azkaban', 'JK Rowling', 300, '6-26-2001'),
('Harry Potter and the Goblet of Fire', 'JK Rowling', 534, '6-26-2003'),
('Harry Potter and the Order of the Pheonix', 'JK Rowling', 574, '6-26-2005'),
('Harry Potter and the Half-Blood Prince', 'JK Rowling', 574, '6-26-2005'),
('Harry Potter and the Deathly Hallows', 'JK Rowling', 624, '6-26-2003'),
('Harry Potter and the Cursed Child', 'JK Rowling', 624, '6-26-2003');