
        document.addEventListener('DOMContentLoaded', function () {
            const buttons = document.querySelectorAll('.add-to-cart');
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    const title = this.getAttribute('data-title');
                    const price = parseFloat(this.getAttribute('data-price'));
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
                const existingItem = cart.find(item => item.title === title);
    
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ title, price, quantity: 1 });
                }
    
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert(`"${title}" has been added to your cart.`);
                });
            });
        });