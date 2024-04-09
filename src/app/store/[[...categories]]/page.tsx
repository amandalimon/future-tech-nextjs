interface CategoryProps {
    params: {
        categories: string[]
    }
    searchParams: {
        social?: string;
    }
}

export default function Category(props: CategoryProps) {
    console.log(props)
    const { categories } = props.params
    console.log(categories)

    return (
        <h1 className="h-screen text-3xl">
            categoría dinámica: {categories}
        </h1>
    )
}
