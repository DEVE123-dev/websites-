
         document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const title = this.getAttribute('data-title');
                const price = parseFloat(this.getAttribute('data-price'));
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Check if item already exists
                const existingItem = cart.find(item => item.title === title);

                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ title, price, quantity: 1 });
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`"${title}" has been added to your cart at $${price.toFixed(2)}.`);
                });
            });
        });

        let currentSlide = 0;

        function moveSlide(step) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            currentSlide += step;

            if (currentSlide < 0) currentSlide = totalSlides - 1;
            if (currentSlide >= totalSlides) currentSlide = 0;

            slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        }