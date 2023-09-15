const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const readInput = document.getElementById('readInput');
const displayBooks = document.getElementById('displayBooks');
const submit = document.getElementById('submit');
const tbodyRef = displayBooks.getElementsByTagName('tbody')[0];
const td1 = document.querySelector('tr td:nth-child(1)');
const td2 = document.querySelector('tr td:nth-child(2)');
const td3 = document.querySelector('tr td:nth-child(3)');
const td4 = document.querySelector('tr td:nth-child(4)');


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
    
    td1.appendChild(cellTitle);
    td2.appendChild(cellAuthor);
    td3.appendChild(cellPages);
    td4.appendChild(cellRead);
    
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


        let cell1 = row.appendChild(td);
        let cell2 = row.appendChild(td);
        let cell3 = row.appendChild(td);
        let cell4 = row.appendChild(td);
        // const newRow = tbodyRef.insertRow(i);
        // const newCell0 = newRow.insertCell(0);
        // const newCell1 = newRow.insertCell(1);
        // const newCell2 = newRow.insertCell(2);
        // const newCell3 = newRow.insertCell(3);
      

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




/*  bookTable.classList.add('table'); */

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