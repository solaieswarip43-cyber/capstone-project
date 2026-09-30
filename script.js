const products = [
    { id: 1, name: 'Wireless Headphones', category: 'electronics', price: 2999, img: '🎧' },
    { id: 2, name: 'Smart Watch', category: 'electronics', price: 4999, img: '⌚' },
    { id: 3, name: 'Casual Denim Jacket', category: 'fashion', price: 1999, img: '🧥' },
    { id: 4, name: 'Running Sneakers', category: 'fashion', price: 2499, img: '👟' }
];

let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cartCountEl = document.getElementById('cart-count');

    function renderProducts(categoryFilter = 'all') {
        productsGrid.innerHTML = '';
        const filtered = categoryFilter === 'all' 
            ? products 
            : products.filter(p => p.category === categoryFilter);

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img">${product.img}</div>
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            `;
            productsGrid.appendChild(card);
        });
    }

    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            cartCount++;
            cartCountEl.textContent = cartCount;
            e.target.textContent = 'Added ✓';
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
            }, 1000);
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.category);
        });
    });

    renderProducts();
});
