import OrderSummaryCard from "./components/OrderSummaryCard";
import Image from "next/image";

function page() {
  return (
    <main className="relative flex items-center justify-center w-screen h-screen px-4 md:px-0 overflow-hidden">
      {/* Background */}
      <Image
        src="/order-summary/pattern-background-desktop.svg"
        fill
        alt=""
        priority
        className="object-cover -z-10 -translate-y-1/2"
      />

      <OrderSummaryCard />
    </main>
  );
}

export default page;
