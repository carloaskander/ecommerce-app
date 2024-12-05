import clientPromise from '../../../../utils/mongodb';

export async function GET(req) {
    const client = await clientPromise;
    const db = client.db('ecommerce');
    const products = await db.collection('products').find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
}
