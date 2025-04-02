document.addEventListener('DOMContentLoaded', function () {
    const payButton = document.getElementById('payButton');
    const backToCart = document.getElementById('backToCart');
    const payWithCardButton = document.getElementById('payWithCard');
    const payWithPaypalButton = document.getElementById('payWithPaypal');

    let selectedPaymentMethod = null;

    payWithCardButton.addEventListener('click', function () {
        selectedPaymentMethod = 'Credit Card';
    });

    payWithPaypalButton.addEventListener('click', function () {
        selectedPaymentMethod = 'PayPal';
    });

    payButton.addEventListener('click', function () {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        alert(`Successfully Paid with ${selectedPaymentMethod}!`);
    });

    backToCart.addEventListener('click', function () {
        window.location.href = 'cart.html';
    });

    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');

    const cartItems = [
        { image: 'stunningstyles.png', name: 'Stunning Styles Ultra Ticket Box', price: 59.00, quantity: 4 },
        { image: 'poweruptix.png', name: 'Power Up Ticket Ultra Ticket Box', price: 150.00, quantity: 1 },
        { image: 'grocketbox.webp', name: 'GO Rocket Box', price: 199.00, quantity: 2 },
        { image: 'ultraraid.webp', name: 'Ultra Raid Box', price: 149.00, quantity: 1 },
        { image: 'mightandmystery.png', name: 'Might and Mystery Box', price: 149.00, quantity: 2 },
        { image: 'eggincu.png', name: 'Egg Incubator', price: 88.00, quantity: 1 },
    ];

    let total = 0;

    checkoutItems.innerHTML = `
        <li class="cart-header">
            <span>Image</span>
            <span>Item</span>
            <span>Quantity</span>
            <span>Price</span>
        </li>
    `;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>${item.quantity}</span>
            <span>₱${(item.price * item.quantity).toFixed(2)}</span>
        `;
        checkoutItems.appendChild(listItem);
        total += item.price * item.quantity;
    });

    checkoutTotal.textContent = `₱${total.toFixed(2)}`;
});