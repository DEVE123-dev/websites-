
document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<tr><td colspan='4' class='empty-cart-message'>Your cart is empty.</td></tr>";
    } else {
        cart.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                    <td>$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `;
            cartItemsContainer.appendChild(tr);
        });
    }

    document.getElementById('billing-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const errorMessage = document.getElementById('error-message');

        if (!fullname || !email || !address) {
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';

        alert(`Thank you, ${fullname}! Your order has been placed and will be shipped to ${address}.`);

        localStorage.removeItem('cart');
        document.getElementById('billing-form').reset();
        document.getElementById('cart-items').innerHTML = "<tr><td colspan='4' class='empty-cart-message'>Your cart is empty.</td></tr>";
    });

    document.getElementById('cancel-purchase').addEventListener('click', function () {
        if (confirm('Are you sure you want to cancel your purchase? This will clear your cart.')) {
            localStorage.removeItem('cart');
            document.getElementById('billing-form').reset();
            document.getElementById('cart-items').innerHTML = "<tr><td colspan='4' class='empty-cart-message'>Your cart is empty.</td></tr>";
            alert('Your purchase has been canceled.');
        }
    });
});