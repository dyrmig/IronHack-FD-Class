// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = document.querySelector('#total-value span').innerHTML;
  //console.log(`precio:${price} cantidad:${quantity} subtotal:${subtotal}`);
  product.querySelector('.subtotal span').innerHTML = (price*quantity);
  document.querySelector('#total-value span').innerHTML = parseInt(total) + price*quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  //reset the total price:
  document.querySelector('#total-value span').innerHTML = '0';

  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.path[2];
  //... your code goes here
  target.remove();
  calculateAll();
}

// ITERATION 5
function updateEventListenerRemoveBtn() {
  let removeBtns = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct); 
  }
}
function createProduct() {
  //... your code goes here
  const productName = document.querySelectorAll('.create-product td input')[0].value;
  const productUnitPrice = document.querySelectorAll('.create-product td input')[1].value;

  document.querySelector('tbody').insertAdjacentHTML('afterend', 
  `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productUnitPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`);
updateEventListenerRemoveBtn()
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  updateEventListenerRemoveBtn();
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
