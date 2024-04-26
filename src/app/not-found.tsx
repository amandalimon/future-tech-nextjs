import Image from "next/image";
import Link from "next/link";
import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
    return (
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image
                src="/images/404.png"
                alt="404"
                width={200}
                height={200}
            />
            <h2 className={styles.NotFound__subtitle}>
                Oops! Looks like you&apos;ve stumbled upon our 404 Error Page.
            </h2>
            <p className={styles.NotFound__description}>
                Don&apos;t worry, we&aposre here to help you find your way back to shopping bliss.
            </p>
            <Link className={styles.NotFound__link} href="/store">
                Let&apos;s go shopping!
            </Link>
        </main>
    );
}