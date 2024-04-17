import { redirect } from "next/navigation"
import { getProducts } from "app/services/shopify/products"
import { ProductView } from "app/components/product/ProductView/ProductView"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if (!id) {
        redirect("/store")
    }

    return <ProductView product={product} />
}