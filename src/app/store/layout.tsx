import Link from "next/link"
import { getCollections } from "app/services/shopify/collections"
import styles from "./StoreLayout.module.sass"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections()

    return (
        <main className={styles.StoreLayout}>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {collections?.map((collection: ProductType) => (
                        <Link
                            key={collection.id}
                            href={`/store/${collection.handle}`} className={styles.StoreLayout__chip}
                        >
                            {collection.title}
                        </Link>
                    ))}
                </ul>
            </nav>
            {children}
        </main>
    )
}