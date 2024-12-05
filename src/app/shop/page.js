// src/app/shop/page.js

async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store', // Ensure fresh data on every request
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <div className="p-8 min-h-screen">
            <section className="bg-gray-100 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Discover the Latest Trends</h1>
                <p className="text-gray-700 mb-8">Shop now and get up to 50% off on select items!</p>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Shop Now
                </button>
            </section>
            <h1 className="text-3xl font-bold mb-8">Shop Products</h1>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {/* Repeat product cards */}
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="p-4 bg-white rounded-lg shadow hover:shadow-lg"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-40 w-full object-cover rounded"
                        />
                        <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-green-600 font-semibold mt-2">
                            ${product.price.toFixed(2)}
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
}
