document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: "product1", name: "Product 1" },
        { id: "product2", name: "Product 2" },
        { id: "product3", name: "Product 3" }
    ];

    const productSelect = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

if (window.location.pathname.includes('review.html')) {
    if (localStorage.getItem('reviewCount')) {
        let count = parseInt(localStorage.getItem('reviewCount'), 10);
        count += 1;
        localStorage.setItem('reviewCount', count);
    } else {
        localStorage.setItem('reviewCount', 1);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const counterElement = document.createElement('p');
        counterElement.textContent = `You have submitted ${localStorage.getItem('reviewCount')} reviews.`;
        document.body.appendChild(counterElement);
    });
}
