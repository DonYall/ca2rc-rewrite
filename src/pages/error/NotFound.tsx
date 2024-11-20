import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen">
      <Header />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col items-center justify-center text-center w-full px-[10%] lg:px-[15%]">
        <main className="w-full flex-grow flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white">404</h1>
          <p className="text-2xl font-semibold text-cyan-300 mb-8">Page Not Found</p>
          <Link to="/" className="text-xl hover:underline">
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    </section>
  );
}
