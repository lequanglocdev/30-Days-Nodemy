var content = document.querySelector('.content')
var input = document.querySelector('.content input')

var btn__remove = document.querySelector('.btn__remove')
var textTag = ['Javascript', 'NodeJS']

function createTag() {
    content.innerHTML = ''
    for (let i = 0; i < textTag.length; i++) {
        const tag = textTag[i];
        content.innerHTML += ` <li>
       ${tag}
        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>
        `
    }
    content.appendChild(input)
    input.focus()
}
createTag()

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        // console.log(input.value)
        textTag.push(input.value.trim())
        input.value = ''
        createTag()
    }
})
function removeTag(index) {
    textTag.splice(index, 1)
    createTag()
}
btn__remove.addEventListener('click', function () {
    textTag = []
    createTag()
})