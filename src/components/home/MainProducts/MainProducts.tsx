import Image from 'next/image'
import { getProducts } from 'app/services/shoppify/products'
import styles from './MainProducts.module.sass'

export const MainProducts = async () => {
    const products = await getProducts()
    return (
        <section className={styles.MainProducts}>
            <h3>New Products Released!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product) => {
                    const imgSrc = product.images[0].src;
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image
                                src={imgSrc}
                                alt={product.title}
                                loading="eager"
                                fill
                                sizes="(max-width: 400px)"
                            />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
