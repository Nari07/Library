const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readInput = document.getElementById('readInput');
const displayBooks = document.getElementById('displayBooks');
const submit = document.getElementById('submit');

let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
  return myLibrary;
}
  
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
  
  let book = new Book(title, author, pages, read);
 	addBookToLibrary(book);
  clearInputs();	
  console.log(myLibrary);
  
});

function clearInputs(){
  titleInput.value = '';
  authorInput.value ='';
  pagesInput.value='';
  readInput.checked = false;

}

for ( let i = 0; i < myLibrary.length; i++){
	let bookCard = document.createElement(div);
  let bookInfo = document.createTextNode(myLibrary[i].title);
 //let asdfasdf = document.createTextNode(myLibrary[i].author);
  bookCard.appendChild(bookInfo);
  displayBooks.appendChild(bookCard);
  
  
}
  
/* greetingOutput.innerText = `Hello ${name.value}`;
}) 
popup how?
card how?
*/