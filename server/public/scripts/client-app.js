$(document).ready(function () {
    getBooks();

    // add a book
    $('#book-submit').on('click', postBook);
});
/**
 * Retrieve books from server and append to DOM
 */
function getBooks() {
  $.ajax({
    type: 'GET',
    url: '/books',
    success: function(books) {
      appendBooks(books);
    },
    error: function() {
      console.log('Database error');
    }

  })
}
/**
 * Add a new book to the database and refresh the DOM
 */
function postBook() {
  event.preventDefault();

  var book = {};

  $.each($('#book-form').serializeArray(), function (i, field) {
        book[field.name] = field.value;
      });

  console.log('book: ', book);

  $.ajax({
    type: 'POST',
    url: '/books',
    data: book,
    success: function(response) {
      getBooks();
    },
    error: function() {
      console.log('could not post a new book');
    }
  })

}

function appendBooks(books) {
  $("#books-list").empty();

  for (var i = 0; i < books.length; i++) {
    $("#book-list").append('<div class="row book"></div>');
    $el = $('#book-list').children().last();
    $el.append('<h2> ' + books[i].title + '</h2>');
    $el.append('<p> ' + books[i].author + '</p>');
    $el.append('<p> ' + books[i].genre + '</p>');
    $el.append('<p> ' + books[i].published + '</p>');
  }
}
