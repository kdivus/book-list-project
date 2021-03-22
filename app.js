// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor
function UI() {

}

// event listeners 
document.getElementById('book-form').addEventListener('submit',
    function(e) {
        // get form values
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value;

        // instantiate a book      
        const book = new Book(title, author, isbn);

        // instantiate ui
        const ui = new UI();

        e.preventDefault();
    }
);