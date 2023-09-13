const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readInput = document.getElementById('readInput');
const displayBooks = document.getElementById('displayBooks');
const submit = document.getElementById('submit');
const tbodyRef = displayBooks.getElementsByTagName('tbody')[0];
const tr1 = document.querySelector('tr td:nth-child(1)');
const tr2 = document.querySelector('tr td:nth-child(2)');
const tr3 = document.querySelector('tr td:nth-child(3)');
const tr4 = document.querySelector('tr td:nth-child(4)');


let myLibrary = [];

function createBook(title, author, pages, read){
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
    
    tr1.appendChild(cellTitle);
    tr2.appendChild(cellAuthor);
    tr3.appendChild(cellPages);
    tr4.appendChild(cellRead);

  } else {
      console.log('length myLibrary = ' + myLibrary.length);
      let addBook = false;
      for (let i = 0; i < myLibrary.length; i++){
        console.log("TEST " + i)
        let bookTable = document.createElement('div');
        let cellTitle = document.createTextNode(myLibrary[i].title);
        let cellAuthor = document.createTextNode(myLibrary[i].author);
        let cellPages = document.createTextNode(myLibrary[i].pages);
        let cellRead = document.createTextNode(myLibrary[i].read);   
        const newRow = tbodyRef.insertRow(i);
        const newCell0 = newRow.insertCell(0);
        const newCell1 = newRow.insertCell(1);
        const newCell2 = newRow.insertCell(2);
        const newCell3 = newRow.insertCell(3);
        
        console.log('title = ' + myLibrary[i].title + ' i = ' + i);
        console.log(book + 'beginning loop');
        
        console.log("TEST  myLibrary[i].title =" + myLibrary[i].title);
        console.log("TEST  title =" + title);
        if (myLibrary[i].title === title) {
          console.log("TEST INSIDE");
          console.log(myLibrary[i].title + ' = ' + title);
          console.log('if title matches' + book)
          clearInputs();	
          document.querySelector('form').reset() // reset form  
          alert(`${title} already exists in your library.`);
          console.log(myLibrary);
          console.log("ENDTEST");
          break;   
        } else if (i == myLibrary.length - 1) {
          addBook = true;
          console.log('book = ' + book +  'if title doesnt match')
          document.querySelector('form').reset() // reset form  
          clearInputs();
          console.log(myLibrary);
          console.log(myLibrary[i].title + ' = ' + title);

          newCell0.appendChild(cellTitle);
          newCell1.appendChild(cellAuthor);
          newCell2.appendChild(cellPages);
          newCell3.appendChild(cellRead);
/*           bookTable.classList.add('table'); */
      } 
    } 
    
    if(addBook) { // = true; prevents loop running twice
    	addBookToLibrary(book);
    }
     
	}

});

function clearInputs(){
  titleInput.value = '';
  authorInput.value ='';
  pagesInput.value='';
  readInput.checked = false;

}


/* greetingOutput.innerText = `Hello ${name.value}`;
}) 

/* 		bookCardTitle.classList.add('cardTitle'); */
/*     bookCardAuthor.classList.add('cardAuthor');
    bookCardPages.classList.add('cardPages');
    bookCardRead.classList.add('cardRead');  */
   
/* bookCard.style.fontWeight = '900';
    bookCard.appendChild(bookCardTitle);
    displayBooks.appendChild(book);
    document.createElement('span')
     */