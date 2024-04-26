import { getProducts } from "app/services/shopify/products";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { ProductsWrapper } from "app/components/Store/ProductsWrapper";

interface CategoryProps {
    params: {
        categories: string[],
    }
    searchParams?: string
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params
    const collections = await getCollections()
    let products = [];

    if (categories?.length > 0) {
        const selectedCollectionId = collections.find(
            (collection: ProductType) => collection.handle === categories[0]).id
        products = await getCollectionProducts(selectedCollectionId)
    } else {
        products = await getProducts()
    }

    return (
        <ProductsWrapper products={products} />
    )
}