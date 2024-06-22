function OpenCart(){
    var cart = document.getElementById('mini-cart');
    var display = cart.style.display;
    var content = document.getElementById('wrapper');
    
    if (display == 'none') {
        cart.style.display = 'flex';
        content.style.overflow = 'hidden';
        cart.style.overflow = 'scroll';
      } else {
        cart.style.display = 'none';
        content.style.overflow = 'scroll';
        cart.style.overflow = 'hidden';
      }
}

function trash(){
    var inCart = document.getElementById('incart');

    inCart.style.display = 'none';
}

function trash2(){
    var inCart2 = document.getElementById('incart2');

    inCart2.style.display = 'none';
}

function trash3(){
    var inCart3 = document.getElementById('incart3');

    inCart3.style.display = 'none';
}

function trash4(){
    var inCart4 = document.getElementById('incart4');

    inCart4.style.display = 'none';
}