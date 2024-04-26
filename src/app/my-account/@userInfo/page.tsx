import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const dynamic = "force-dynamic"

export default async function MyAccountPage() {
    const customer = await validateAccessToken()

    return (
        <div>
            <h2>Account Information</h2>
            <section>
                <p>{customer?.firstName}</p>
                <p>{customer?.email}</p>
            </section>
        </div>
    );
}