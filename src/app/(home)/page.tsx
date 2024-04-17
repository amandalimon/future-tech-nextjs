import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future💫Tech",
  description: "Unlocking the potential of tomorrow, today.",
  keywords: ["Technology", "Electronics", "Devices", "Wearables", "Smart home", "Virtual reality", "Artificial intelligence", "Renewable energy", "Eco-technology"],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
