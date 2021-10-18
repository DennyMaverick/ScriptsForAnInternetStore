window.addEventListener('click', function (event) {

   let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {

      const counterWrapper =  event.target.closest('.counter-wrapper');
      // console.log(counterWrapper);
     
      counter = counterWrapper.querySelector('[data-counter]');

    }

    if (event.target.dataset.action === 'plus') {
  
     counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {
        
     if ( parseInt(counter.innerText) > 1 ) {
         counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
     // Проверка на товар, лежащий в корзине
      // Удаляем товар
      event.target.closest('.cart-item').remove();

      toggleCardStatus();
  // запуск функции пересчета товаров в корзине
      calcCardPriceAndDelivery();
    }

  
    }
    
    // Проверяем клик + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      calcCardPriceAndDelivery();
    };

});