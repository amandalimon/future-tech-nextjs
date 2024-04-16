import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, {
            headers: {
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            }
        })
        const { smart_collections } = await response.json()
        const transformedCollections = smart_collections.map(
            (collection: ProductType) => {
                return {
                    id: collection.id,
                    title: collection.title,
                    handle: collection.handle,
                }
            })
        return transformedCollections
    } catch (error) {
        console.log(error)
    }
}

export const getCollectionProducts = async (id: string) => {
    try {
        const response = await fetch(shopifyUrls.collections.products(id), {
            headers: {
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            }
        })
        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}