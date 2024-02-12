import {menuArray} from './data.js'
let total = 0
let itemsInCart = []

function clearCart() {
    location.reload ()
}

document.addEventListener('click', function(e){


    
    //listen for add button
    if (e.target.dataset.addbutton){
        menuArray.forEach(function(obj){
            if (obj.id === Number(e.target.dataset.addbutton)){                        
                document.getElementById('orders-list').innerHTML += `
                <li>${obj.name}</li>`

                document.getElementById('order-price').innerHTML += `
                <li>$ ${obj.price}`
                total += obj.price
                itemsInCart.push(obj.name)
            }
        })
        document.getElementById('total-checkout').innerHTML = `$ ${total}`
        console.log(total)
        console.log(itemsInCart)

    //listen for clear button
    } else if (e.target.dataset.clear){
        clearCart()

    } else if (e.target.dataset.close){
        console.log('X')
        
    } else if (e.target.dataset.checkout){
        console.log('checkout clicked')
        document.getElementById('payment-form').style.display = 'block'
        document.getElementById('total-checkout-x').innerHTML = `$ ${total}`
    } else if (e.target.dataset.submit){
        document.getElementById('total-order-popup').innerHTML = ''
        document.getElementById('form-flex').innerHTML = `<h3>Thank You !</h3>
        <h3> We are reviewing your payment and we will get back to you soon :)</h3>`
    }
})

function renderMenu (){
    menuArray.map(function(element){
        document.getElementById('container-bloc').innerHTML += 
        
        `
        <section id="container">
            <div id="container-div">
                <h1> ${element.emoji} </h1>
            </div>

            <div id="txt-container">
                <ul>
                    <li>${element.name}</li>
                    <li>${element.ingredients.join(', ')}</li>
                    <li>${element.price}</li>
                </ul>
            </div>
            <button id="add-btn" data-addbutton="${element.id}">+</button>  
        </section>  
    `   
    })}


renderMenu()