const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readInput = document.getElementById('readInput');
const displayBooks = document.getElementById('displayBooks');
const tbodyRef = displayBooks.getElementsByTagName('tbody')[0];

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
     
 	if (myLibrary.length === 0) {
    addBookToLibrary(book);
    document.querySelector('form').reset() // reset form  
    clearInputs();
    
    let bookTable = document.createElement('div');
    let cellTitle = document.createTextNode(myLibrary[0].title);
    let cellAuthor = document.createTextNode(myLibrary[0].author);
    let cellPages = document.createTextNode(myLibrary[0].pages);
    let cellRead = document.createTextNode(myLibrary[0].read);
    let deleteButton = document.createElement('button');
    
    td1.appendChild(cellTitle);
    td2.appendChild(cellAuthor);
    td3.appendChild(cellPages);
    td4.appendChild(cellRead);
    td5.appendChild(deleteButton);
   	deleteButton.textContent = 'x';
    
    bookTable.dataset.number = 0;
    console.log(bookTable.dataset.number);
    
  } else {
      console.log('length myLibrary = ' + myLibrary.length);
      let addBook = false;
      for (let i = 0; i < myLibrary.length; i++){
        console.log("TEST " + i)
        let bookTable = document.createElement('div');
        let cellTitle = document.createTextNode(title);
        let cellAuthor = document.createTextNode(author);
        let cellPages = document.createTextNode(pages);
        let cellRead = document.createTextNode(read);   
        let row = document.createElement('tr');
        let td = document.createElement('td');
				let deleteButton = document.createElement('button');

        let cell1 = row.appendChild(td);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        if (myLibrary[i].title === title &&  myLibrary[i].author === author) {
          console.log(myLibrary[i].title + ' = ' + title);
          console.log('if title matches' + book)
          clearInputs();	
          document.querySelector('form').reset() // reset form  
          alert(`${title} already exists in your library.`);
          console.log(myLibrary);
          break;   
        } else if (i == myLibrary.length - 1) {
            addBook = true;
            console.log('book = ' + book +  'if title doesnt match')
            document.querySelector('form').reset() // reset form  
            clearInputs();
            console.log(myLibrary);
            console.log(myLibrary[i].title + ' = ' + title);
            
            tbodyRef.appendChild(row);

            cell1.appendChild(cellTitle);
            cell2.appendChild(cellAuthor);
            cell3.appendChild(cellPages);
            cell4.appendChild(cellRead);
            cell5.appendChild(deleteButton);
            deleteButton.textContent = 'x';
          
      } 
    } 
    
    if(addBook) { // = true; prevents loop running twice
    	addBookToLibrary(book);
    }
	}
  
	dialog.close();
  
});

function clearInputs(){
  titleInput.value = '';
  authorInput.value ='';
  pagesInput.value='';
  readInput.checked = false;
};

function openCheck() {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
};


addBookButton.addEventListener('click', () => {
  console.log('butt');
	dialog.showModal();
  openCheck();
});

cancel.addEventListener('click', () => {
	dialog.close();
  openCheck();
});

//delete butt ton --> specifiy which book bneing deleted
//book.dataset.number = i;
  // console.log(book.number);