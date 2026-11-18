/**
- Componente PaymentMethodsCarousel
- Carrusel horizontal infinito de medios de pago con desvanecimiento lateral.  
- @returns 
 */

import { useState } from "react";
import { motion } from "motion/react";
import paymentData from "../../data.json";

// 1. Definimos la interfaz que describe cada método de pago
interface CarrouselItem {
  id: number;
  source: string;
  alt: string;
}

function PaymentMethodsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // 2. Tipamos y aseguramos que los datos importados cumplan con la estructura

  

  return (
    <section className="w-full py-10 border-y border-neutral-200/80 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado sutil acorde a tu diseño */}
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-7">
          MEDIOS DE PAGO ACEPTADOS
        </p>

        {/* 3. Contenedor con máscara de desvanecimiento en los extremos horizontales */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
        >
          {/* Pista animada horizontal con Motion */}
          <motion.div
            className="flex w-max items-center gap-12 sm:gap-16 py-2"
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 24,
            }}
          >
            {duplicatedMethods.map((item: CarrouselItem, index: number) => (
              <div
                key={`${item.id}-${index}`}
                className="group inline-flex items-center gap-2.5 shrink-0 select-none transition-transform duration-200 hover:scale-105 cursor-default"
              >
                {/* Renderizamos la imagen con efecto de escala de grises que recupera color al hacer hover */}
                <img
                  src={item.source}
                  alt={item.alt}
                  loading="lazy"
                  className="h-6 sm:h-7 w-auto object-contain grayscale opacity-60 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethodsCarousel;