const {
    getAllBooks,
    getBookById,
    editBookById,
    addBooks,
    deleteBookById,
  } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBooks,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookById,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getAllBooks,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookById,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookById,
    },
  ];

module.exports = routes;