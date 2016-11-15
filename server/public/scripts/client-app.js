$(document).ready(function () {
    getBooks();

    // add a book
    $('#book-submit').on('click', postBook);
});
/**
 * Retrieve books from server and append to DOM
 */
function getBooks() {

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
}
