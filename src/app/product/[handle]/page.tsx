"use client"
import { useParams, useSearchParams } from "next/navigation"

export default function ProductPage() {
    const params = useParams()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    console.log('params:', params)
    console.log('search params id:', id)

    return (
        <h1>product page</h1>
    )
}