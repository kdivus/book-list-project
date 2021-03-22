class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
    // create tr element 
    const row = document.createElement('tr');

    //insert cols 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `;

    list.appendChild(row);
    }


    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        //add class name 
        div.className = `alert ${className}`;
        // add text 
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div, form); 
        //timeout after 3 sec 
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
};

// event listener for adding books
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

        

        // validate 
        if(title === '' || author === '' || isbn === '') {
            // error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else {
        // add bok to list 
        ui.addBookToList(book);

        // show success 
        ui.showAlert('Book added', 'success');

        // clear fields 
        ui.clearFields();
        }

        e.preventDefault();
    }
);

// event listener for delete 
document.getElementById('book-list').addEventListener('click', function(e){

    // instantiate ui
    const ui = new UI();

    ui.deleteBook(e.target);

    // show alert after delete
    ui.showAlert('Book removed', 'success');

    e.preventDefault();
});