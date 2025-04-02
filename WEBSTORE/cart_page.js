document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.querySelector('.cart-items');
    const checkoutTotalElement = document.querySelector('.checkout-total');

    let cart = [
        { image: 'stunningstyles.png', name: 'Stunning Styles Ultra Ticket Box', price: 59.00, quantity: 4 },
        { image: 'poweruptix.png', name: 'Power Up Ticket Ultra Ticket Box', price: 150.00, quantity: 1 },
        { image: 'grocketbox.webp', name: 'GO Rocket Box', price: 199.00, quantity: 2 },
        { image: 'ultraraid.webp', name: 'Ultra Raid Box', price: 149.00, quantity: 1 },
        { image: 'mightandmystery.png', name: 'Might and Mystery Box', price: 149.00, quantity: 2 },
        { image: 'eggincu.png', name: 'Egg Incubator', price: 88.00, quantity: 1 },
    ];

    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>x${item.quantity}</span>
            <span>₱${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsList.appendChild(cartItemElement);
        total += item.price * item.quantity;
    });

    checkoutTotalElement.textContent = `₱${total.toFixed(2)}`;
});