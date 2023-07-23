const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPs = document.getElementById('confirmPs')

// show success
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form__control success'
    const small = formControl.querySelector('small')
    small.innerText = ``
}

// show error
function showError(input, mes) {
    const formControl = input.parentElement
    formControl.className = 'form__control error'
    const small = formControl.querySelector('small')
    small.innerText = mes
}

// checkEmtyInput

function checEmtyInput(inputArr) {
    let isEmty = false
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'Không đươc đe rong')
            isEmty = true
        } else {
            showSuccess(input)
        }
    });
    return isEmty
}
function checkEmail(input) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let isEmailError = !regex.test(input.value)
    if (regex.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'email khong hop le')
    }
}
function checkLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `phai it nhat ${min} ki tu`)
    } else if (input.value.length > max) {
        showError(input, `phai it hon ${max} ki tu`)
    } else {
        showSuccess(input)
    }

}

function checkConfirmPs(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'pass khong trung khop')
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (!checEmtyInput([username, email, password, confirmPs])) {
        checkLenght(username, 3, 15)
        checkLenght(password, 6, 25)
        checkEmail(email)
        checkConfirmPs(password, confirmPs)
    }
})