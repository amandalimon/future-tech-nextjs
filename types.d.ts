interface ErrorProps {
    error: Error;
    reset: () => void
}

type Product = {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: string | null;
    published_scope: string;
    tags: string;
    status: string;
    admin_graphql_api_id: string;
    variants?: Variant[];
    options?: Option[];
    images: Image[];
    image: Image;
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};

type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
}