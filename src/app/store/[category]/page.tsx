interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const { category } = props.params

    return (
        <h1 className="h-screen text-3xl">
            categoría dinámica: {category}
        </h1>
    )
}