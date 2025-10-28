
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        thankYouMessage.textContent = 'Thank you for submitting your question!';
        thankYouMessage.style.display = 'block';
    });
}); 