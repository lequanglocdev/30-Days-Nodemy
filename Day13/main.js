{/* <div class="product__item">
                <img src="pd.jpg" alt="">
                <div class="product__info">
                    <div class="product__name">Sản phẩm 1</div>
                    <div class="product__price">$99</div>
                </div>
            </div> */}


fetch('https://fakestoreapi.com/products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        // console.log(data)
        var productsList = document.querySelector('.product__list')
        productsList.innerHTML = ''
        data.forEach(item => {
            var productItem = document.createElement('div')
            productItem.classList.add('product__item')
            productItem.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="product__info">
                <div class="product__name">${item.title}</div>
                <div class="product__price">${item.price}</div>
            </div>
            
            `
            productsList.appendChild(productItem)
        });
    })
var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDom = document.querySelectorAll('.product__item')
    listProductDom.forEach(item => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }

    })
})