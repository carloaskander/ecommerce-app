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
        <div className="p-8 min-h-screen max-w-screen-2xl mx-auto">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 relative">
                <img
                    src="https://via.placeholder.com/1500x500"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">Welcome to DripLine</h1>
                </div> */}
            </div>

            <h1 className="text-3xl font-bold mb-8 mt-6">Shop Products</h1>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {/* Repeat product cards */}
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white hover:shadow-lg flex flex-col overflow-hidden"
                    >
                        {/* Image Wrapper with Aspect Ratio */}
                        <div className="relative w-full pb-[125%]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4 flex-grow flex flex-col">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description}</p>
                            <p className="text-green-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
