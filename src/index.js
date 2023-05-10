const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const server = express();

// config server
server.use(cors());
// server.use(express.json({limit: '25mb'}));
server.use(express.json());

// init express aplication
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


// config static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// init and config data base
const db = new Database('./src/data_base.db', {});

// Queries
// Authors
server.get('/authors', (req, res) => {
  const query = db.prepare(`SELECT * FROM authors`);
  const result = query.all();
  res.json(result);
});

server.get('/author/:uuid', (req, res) => {
  const query = db.prepare(`SELECT * FROM authors WHERE uuid = ?`);
  const result = query.get(req.params.uuid);
  res.json(result);
});

server.post('/author', (req, res) => {
  const query = db.prepare(
    `INSERT INTO authors (first_name, last_name) VALUES (?, ?)`
  );
  const result = query.run(req.body.first_name, req.body.last_name);
  res.json({
    result: 'Author created',
    uuid: result.lastInsertRowid,
  });
});

// Books
server.get('/books', (req, res) => {
  const query = db.prepare(`
  SELECT books.*, authors.first_name, authors.last_name
  FROM books
  JOIN authors
  on books.author = authors.uuid`);
  const result = query.all();
  const books_result = result.map((book) => {
    return {
      uuid: book.uuid,
      name: book.name,
      isbn: book.isbn,
      author: {
        uuid: book.author,
        first_name: book.first_name,
        last_name: book.last_name,
      },
    };
  });

  res.json(books_result);
});

server.get('/book/:uuid', (req, res) => {
  const query = db.prepare(`
  SELECT books.*, authors.first_name, authors.last_name
  FROM books
  JOIN authors
  on books.author = authors.uuid
  WHERE books.uuid = ?`);
  const result = query.get(req.params.uuid);
  const book_result = {
    uuid: result.uuid,
    name: result.name,
    isbn: result.isbn,
    author: {
      uuid: result.author,
      first_name: result.first_name,
      last_name: result.last_name,
    },
  };
  res.json(book_result);
});

server.post('/book', (req, res) => {
  const query = db.prepare(
    `INSERT INTO books (name, isbn, author) VALUES (?, ?, ?)`
  );
  const result = query.run(req.body.name, req.body.isbn, req.body.author);
  res.json({
    result: 'Book created',
    uuid: result.lastInsertRowid,
  });
});
