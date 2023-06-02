const submit = document.querySelector('.submit')

const titleText=document.querySelector('#title')
const authorText=document.querySelector('#author')
const pagesNumbers=document.querySelector('#pages')

const titleError=document.querySelector('#title + span.error')
const authorError=document.querySelector('#author + span.error')
const pagesError=document.querySelector('#pages + span.error')

titleText.addEventListener('input',()=>{
    if(titleText.validity.valid){
        titleError.textContent=""
        titleError.className="error"
    }else{
        showTitleTextError()
    }
})
authorText.addEventListener('input',()=>{
    if(authorText.validity.valid){
        authorError.textContent=""
        authorError.className="error"
    }else{
        showAuthorTextError()
    }
})
pagesNumbers.addEventListener('input',()=>{
    if(pagesNumbers.validity.valid){
        pagesError.textContent=""
        pagesError.className="error"
    }else{
        showPagesTextError()
    }
})

submit.addEventListener('click',(event)=>{
    if(!titleText.validity.valid){
        showTitleTextError()
        event.preventDefault()
    }else if(!authorText.validity.valid){
        showAuthorTextError()
        event.preventDefault()
    }else if(!pagesNumbers.validity.valid){
        showPagesTextError()
        event.preventDefault()
    }
})

function showTitleTextError(){
    if(titleText.validity.valueMissing){
        titleError.textContent="This field cannot be empty"
    }
    titleError.className="error active"
}
function showAuthorTextError(){
    if(authorText.validity.valueMissing){
        authorError.textContent="This field cannot be empty"
    }
    authorError.className="error active"
}
function showPagesTextError(){
    if(pagesNumbers.validity.valueMissing){
        pagesError.textContent="This field cannot be empty"
    }
    else if(pagesNumbers.validity.typeMismatch){
        pagesError.textContent="Please enter a number"
    }
    else if(pagesNumbers.validity.tooShort){
        pagesError.textContent=`pages should be atleast${pagesNumbers.min}, you entered ${pagesNumbers.value.length}`
    }
    else if(pagesNumbers.validity.tooLong){
        pagesError.textContent=`pages should be atmost${pagesNumbers.max}, you entered ${pagesNumbers.value.length}`
    }
    pagesError.className="error active"
}