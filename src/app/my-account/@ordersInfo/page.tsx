import { getCustomerOrders } from "app/services/shopify/graphql/customer";

export default async function MyAccountPage() {
    const ordersInfo = getCustomerOrders()
    console.log(ordersInfo)
    
    return (
        <div>
            <section>
                <h2>Orders</h2>
                {ordersInfo.orders?.map((order) => (
                    <p key={order.orderNumber}>{order.orderNumber} </p>
                ))}
            </section>
        </div>
    );
}