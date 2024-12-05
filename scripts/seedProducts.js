import clientPromise from '../utils/mongodb.js';

async function seedProducts() {
    const client = await clientPromise; // This uses MONGODB_URI.
    const db = client.db('ecommerce');

    const products = [
        {
            name: 'Wireless Mouse',
            description: 'A sleek and ergonomic wireless mouse.',
            price: 25.99,
            category: 'Electronics',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Gaming Keyboard',
            description: 'Mechanical keyboard with RGB lighting.',
            price: 75.49,
            category: 'Electronics',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Smartphone Stand',
            description: 'Adjustable stand for smartphones and tablets.',
            price: 10.99,
            category: 'Accessories',
            image: 'https://via.placeholder.com/150',
        },
    ];

    await db.collection('products').insertMany(products);
    console.log('Products seeded!');
    process.exit();
}

seedProducts();
