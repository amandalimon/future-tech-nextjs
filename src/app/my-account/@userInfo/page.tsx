import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
    const customer = await validateAccessToken()
    
    return (
        <div>
            <section>
                <h2>Your Info</h2>
                <h1>Welcome, {customer.firstName}</h1>
                <p>email: {customer.email}</p>
            </section>
        </div>
    );
}