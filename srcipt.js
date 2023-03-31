let myLibrary = []

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
}

Book.prototype.toggleRead = function(){
    this.read=!this.read
}

function toggleRead(index){
    myLibrary[index].toggleRead()
    renderbooks()
}

function addBookToLibrary(){
    let title=document.querySelector("#title").value
    let author=document.querySelector("#author").value
    let pages=document.querySelector("#pages").value
    let read=document.querySelector("#haveRead").checked
    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    renderbooks()
}

function renderbooks(){
    let library = document.querySelector(".library")
    library.innerHTML=""
    for(let i=0;i<myLibrary.length;i++){
        let book = myLibrary[i]
        let bookElement = document.createElement('div')
        bookElement.className="book-card"
         bookElement.innerHTML=`<h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <h3>${book.pages}</h3>
            <h3>${book.read ? "Read" : "Not Read Yet"}</h3>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="read-btn" onclick="toggleRead(${i})">Toggle Read</button>`
        library.appendChild(bookElement)
    }
}

function removeBook(index){
    myLibrary.splice(index,1)
    renderbooks()
}

document.addEventListener("DOMContentLoaded", function () {

  let newBookBtn = document.querySelector(".new-book")
  newBookBtn.addEventListener("click", function () {
    let bookForm = document.querySelector("#new-book-form")
    bookForm.style.display="block"
  });

  document.querySelector("#new-book-form").addEventListener("submit", function(event){
    event.preventDefault()
    addBookToLibrary()
    let title=document.querySelector("#title")
    let author=document.querySelector("#author")
    let pages=document.querySelector("#pages")
    let read=document.querySelector("#haveRead")
    title.value=""
    author.value=""
    pages.value=""
    read.checked=false
    let bookForm = document.querySelector("#new-book-form")
    bookForm.style.display="none"
  })
});