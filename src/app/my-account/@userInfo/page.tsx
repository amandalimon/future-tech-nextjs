import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const dynamic = "force-dynamic"

export default async function MyAccountPage() {
    const customer = await validateAccessToken()
    
    return (
        <div>
            <section>
                <h2>Account Information</h2>
                <h1>Name: {customer?.firstName}</h1>
                <p>Email: {customer?.email}</p>
            </section>
        </div>
    );
}