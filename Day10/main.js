const btnSuccess = document.querySelector('.control .success')
const btnWraning = document.querySelector('.control .wraning')
const btnError = document.querySelector('.control .error')

btnSuccess.addEventListener('click', function () {
    createToast('success')
})
btnWraning.addEventListener('click', function () {
    createToast('wraning')
})

btnError.addEventListener('click', function () {
    createToast('error')
})
function createToast(status) {
    // <div class="toast success">
    //         <i class="fa-solid fa-circle-check"></i>
    //         <span class="message">This is Successs message</span>
    //         <span class="countdown"></span>
    //     </div>
    //     <div class="toast wraning">
    //         <i class="fa-solid fa-circle-check"></i>
    //         <span class="message">This is Successs message</span>
    //         <span class="countdown"></span>
    //     </div>
    //     <div class="toast error">
    //         <i class="fa-solid fa-circle-check"></i>
    //         <span class="message">This is Successs message</span>
    //         <span class="countdown"></span>
    //     </div>

    let template = `<i class="fa-solid fa-circle-check"></i>
     <span class="message">This is Successs message</span>
    `
    switch (status) {
        case 'success':
            template = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is Successs message</span>`
            break;
        case 'wraning':
            template = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is Successs message</span>`
            break;
        case 'error':
            template = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is Successs message</span>`
            break;
    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = ` <i class="fa-solid fa-circle-check"></i>
             <span class="message">This is Successs message</span>
           <span class="countdown"></span>
    `
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(function () {
        toast.style.animation = 'slide_hide 1s ease forwards'
    }, 4000)
    setTimeout(function () {
        toast.remove()
    }, 5000)
}
