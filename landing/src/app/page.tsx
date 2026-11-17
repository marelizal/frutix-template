import CarrouselPayments from "@/components/carrousel-paymets";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import Steps from "@/components/steps";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Este es el menu de navegacion */}
      <Navbar />
      {/* Este es el componente hero */}
      <Hero />
      {/* Este es el componente carrousel */}
      <CarrouselPayments />
      {/* Este es el componente offers */}
      <Offers />
      {/* Estes es el componente steps */}
      <Steps />
      {/* Este es el componente footer */}
      <Footer />
    </main>
  );
}
