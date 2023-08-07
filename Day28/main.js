var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    // console.log('loc')
    let value = input.value.trim()
    if (value) {
        addTodo({
            text: value,
        })
        saveTodo()
    }
    input.value = ''
})

function addTodo(todo) {
    var li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span>
                <i class="far fa-trash-alt"></i>
    `
    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }
    li.addEventListener('click', function () {
        this.classList.toggle('completed')
    })
    li.querySelector('i').addEventListener('click', function () {
        this.parentElement.remove()
    })
    todos.appendChild(li)
}
function saveTodo() {
    let todoList = document.querySelectorAll('li')
    let todoStorage = []
    todoList.forEach(function (item) {
        let text = item.querySelector('span').innerText
        let status = item.querySelector('span').getAttribute('class')

        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage))
    console.log(JSON.parse(localStorage.getItem('todoList')))
}