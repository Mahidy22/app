

let input = document.querySelector('#inputVelu');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let setIntput = '';


addBtn.addEventListener('click',()=>{
    input.textContent = input.value ;
    setIntput = String(input.value);
    input.value = '';

    let uniId = Date.now().toString();
    createTodo(uniId,setIntput);

});


let createTodo = (uniId,setIntput)=>{
    let todoElm = document.createElement('li');
    todoElm.id = uniId;
    todoElm.innerHTML = `
    <span> ${setIntput}</span>
    <span>  <button class="btn " id='icon'> <i class="fa fa-trash"></i></button> </span>
    ` ;
    todoElm.classList.add('li')
    list.appendChild(todoElm)

    let delBtn = todoElm.querySelector('#icon');
    delBtn.addEventListener('click',()=>{
        let todoList = event.target.parentElement.parentElement.parentElement;
        list.removeChild(todoList)
    })
}


