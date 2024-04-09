interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const { category } = props.params

    return (
        <h1 className="h-screen">
            categoría dinámica: {category}
        </h1>
    )
}