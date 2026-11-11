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
    <Navbar />
    <Hero />
     <CarrouselPayments />
     <Offers />
     <Steps />
     <Footer />
   </main>
  );
}
