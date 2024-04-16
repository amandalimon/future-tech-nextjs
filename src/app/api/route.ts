import { getProducts } from "app/services/shoppify/products";

export async function GET() {
    const products = await getProducts();
    return Response.json({ products })
}