let myLibrary = []

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
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
        let bookElement = document.createElement("div")
        if(book.read){
            bookElement.innerHTML=`<div class="book-card">
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <h3>${book.pages}</h3>
                <h3>read</h3>
            </div>`
        }
        else{
            bookElement.innerHTML=`<div class="book-card">
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <h3>${book.pages}</h3>
            <h3>not read yet</h3>
        </div>`
        }
        library.appendChild(bookElement)
    }
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