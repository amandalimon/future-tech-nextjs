import { cookies } from "next/headers"
import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"

export const validateAccessToken = async () => {
    try {
        const cookiesStore = cookies()
        const accessToken = cookiesStore.get("accessToken")?.value || ''
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
        const { customer } = await graphqlClient.request(customerName, {
            customerAccessToken: accessToken
        })
        return customer
    } catch (error) {
        console.error(error)
    }
}