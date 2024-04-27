"use client"
import Link from "next/link";
import { FormEvent } from "react";
import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";

export const LoginForm = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        await handleLogin(formData);
    }

    return (
        <div className={styles.NewAccountForm}>
            <h1 className={styles.NewAccountForm__title}>Login</h1>
            <h2 className={styles.NewAccountForm__subtitle}>You don&apos;t an account? <Link href="/signup">Sign up</Link></h2>
            <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
                <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" name="submit" value="Login" />
            </form>
        </div>
    );
}