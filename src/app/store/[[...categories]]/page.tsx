interface CategoryProps {
    params: {
        categories: string[]
    }
    searchParams: {
        social?: string;
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params
    // throw new Error ('Error: boom!')

    return (
        <h1 className="h-screen text-3xl">
            categoría dinámica: {categories}
        </h1>
    )
}
