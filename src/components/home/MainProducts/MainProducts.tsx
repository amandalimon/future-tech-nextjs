import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { Product } from 'app/app/models/product.model'

const getProducts = async (): Promise<Product[] | undefined> => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json
        `, {
            headers: {
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            }
        })
        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}

export const MainProducts = async () => {
    const products = await getProducts()
    console.log(products)
    return (
        <section className={styles.MainProducts}>
            <h3>New Products Released!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product) => {
                    const imgSrc = product.images[0].src;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imgSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
