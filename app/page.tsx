import Link from "next/link";

const links = [
  { title: "Order Summary Component", description: "", href: "/order-summary" },
  {title: "Typing Speed Test", description: "", href: "/typing-test"},
  {title: "Contact Form", description: "", href: "/contact-form"}
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Component Table of Contents
        </h1>

        <div className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-black">{link.title}</h2>
              <p className="text-neutral-600 mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
