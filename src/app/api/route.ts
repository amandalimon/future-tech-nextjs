import { getProducts } from "app/services/shoppify";

export async function GET() {
    const products = await getProducts();
    return Response.json({ products })
}