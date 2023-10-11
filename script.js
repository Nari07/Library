const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readInput = document.getElementById('readInput');
const displayBooks = document.getElementById('displayBooks');
const tbodyRef = displayBooks.getElementsByTagName('tbody')[0];
let firstDelete;

const td1 = document.querySelector('tr td:nth-child(1)');
const td2 = document.querySelector('tr td:nth-child(2)');
const td3 = document.querySelector('tr td:nth-child(3)');
const td4 = document.querySelector('tr td:nth-child(4)');
const td5 = document.querySelector('tr td:nth-child(5)');

const dialog = document.getElementById('dialog');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
const addBookButton = document.getElementById('addBookButton');

let myLibrary = [];

function createBook(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary(book){
  myLibrary.push(book);
  return myLibrary;
};
  
submit.addEventListener('click', (e) => {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read;
  if (readInput.checked === false){
    read = 'not read';
  } else if (readInput.checked === true){
    read = 'read';
  }
  
  let book = new createBook(title, author, pages, read);
     
  let bookTable = document.createElement('div');
  let cellTitle = document.createTextNode(title);
  let cellAuthor = document.createTextNode(author);
  let cellPages = document.createTextNode(pages);
  let cellRead = document.createTextNode(read);   
  let row = document.createElement('tr');
  let td = document.createElement('td');
  let deleteButton = document.createElement('button');
  
	
  tbodyRef.appendChild(row);
  let cell1 = row.appendChild(td);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
	
 	if (myLibrary.length === 0) { //if library is empty, add first book
    addBookToLibrary(book);
    document.querySelector('form').reset() // reset form  
    clearInputs();
			
    cell1.appendChild(cellTitle);
    cell2.appendChild(cellAuthor);
    cell3.appendChild(cellPages);
    cell4.appendChild(cellRead);
    cell5.appendChild(deleteButton);
    deleteButton.textContent = 'x';
    
    bookTable.dataset.number = 0;
    console.log('dataset = ' + bookTable.dataset.number)

    deleteButton.addEventListener('click', () => {
      minusOne();
      tbodyRef.deleteRow(0);
      myLibrary.splice(0, 1);
      console.log('myLibrary = ' + JSON.stringify(myLibrary));
    });

  } else {
      console.log('length myLibrary = ' + myLibrary.length + ' loop begins');
      let addBook = false;
      for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title === title &&  myLibrary[i].author === author) {
          console.log(myLibrary[i].title + ' = ' + title);
          console.log('if title matches' + book)
          clearInputs();	
          document.querySelector('form').reset() // reset form  
          alert(`${title} already exists in your library.`);
          break;   
        } else if (i == myLibrary.length - 1) {
            addBook = true;
            console.log('new book being added  = ' + JSON.stringify(book))
            document.querySelector('form').reset() // reset form  
            clearInputs();

            cell1.appendChild(cellTitle);
            cell2.appendChild(cellAuthor);
            cell3.appendChild(cellPages);
            cell4.appendChild(cellRead);
            cell5.appendChild(deleteButton);
            deleteButton.textContent = 'x';
												
            n = i;
            bookTable.dataset.number = n + 1;
            console.log('dataset = ' + bookTable.dataset.number);
          
            deleteButton.addEventListener('click', () => {
              console.log(firstDelete + ' hit');
              
              if(firstDelete = true || bookTable.dataset.number == 0){
                bookTable.dataset.number = Number(bookTable.dataset.number) - 1;
                resetDelete();
              } 

              if (bookTable.dataset.number < myLibrary.length){
                tbodyRef.deleteRow(bookTable.dataset.number);
                myLibrary.splice(bookTable.dataset.number, 1);
                console.log('myLibrary = ' +  JSON.stringify(myLibrary));
                bookTable.dataset.number = bookTable.dataset.number - 1;
                console.log('dataset = ' + bookTable.dataset.number);
             // } else if (myLibrary.length = 1){
             // tbodyRef.deleteRow(0);
             // bookTable.dataset.number = 0;
             // myLibrary.splice(0, 1);
             // console.log('myLibrary = ' + JSON.stringify(myLibrary));
              } else {
                  bookTable.dataset.number = bookTable.dataset.number - 1;
                  console.log('dataset before delete = ' + bookTable.dataset.number);
                  tbodyRef.deleteRow(bookTable.dataset.number);
                  myLibrary.splice(bookTable.dataset.number, 1);
                  bookTable.dataset.number = bookTable.dataset.number - 1;
                  console.group()
                  console.log('myLibrary = ' +  JSON.stringify(myLibrary));
                  console.log('dataset = ' + bookTable.dataset.number);
                  console.groupEnd()
                  
              }
              
            });
      } 
    } 
    
    if(addBook) { // = true; prevents loop running twice
    	addBookToLibrary(book);
    }

   
	}

	dialog.close();
		console.group()
  	console.log('myLibrary = ' + JSON.stringify(myLibrary) + ' \nloop closed')
		console.groupEnd()
});

function deleteBook() {
  tbodyRef.deleteRow(bookTable.dataset.number);
}

function clearInputs(){
  titleInput.value = '';
  authorInput.value ='';
  pagesInput.value='';
  readInput.checked = false;
};

function minusOne(){
  firstDelete = true;
  return firstDelete;
}

function resetDelete(){
  firstDelete = false;
  return firstDelete;
}

addBookButton.addEventListener('click', () => {
	dialog.showModal();
});

cancel.addEventListener('click', () => {         
	dialog.close();
});