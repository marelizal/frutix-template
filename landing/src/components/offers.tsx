/**
 * Componente Offers
 * El componente contiene tarjetas de los combos destacados de
 * la semana, su precio y contenido, cada uno con su respectivo boton
 * para realizar el pedido.
 *
 * @returns
 *
 */

import offersdata from "../../data.json";

// Definimos la interfaz que describe cada oferta
interface OfferItem {
  ofer: number;
  title: string;
  description: string;
  price: string;
  items: string[];
  tag: string;
  featured: boolean;
}

import { Check, MessageCircleText } from "lucide-react";

function Offers() {
  // tipamos y aseguramos que los datos importados cumplan con la estructura

  const offers = offersdata.offers as OfferItem[];
  const phone = "3624304308";

  return (
    <section className="bg-gray-50 p-3 py-12">
      <span className="text-red-500 font-bold text-sm">
        ( 3 COMBOS SEMANALES )
      </span>
      {/* Combos de la semana */}
      <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-8">
        <h1 className=" text-3xl font-bold text-black">
          Elegi tu combo de esta semana
        </h1>
        <span className="text-sm text-gray-500">
          Sin suscripcion obligatoria <span>•</span> Pagas al recibir
        </span>
      </div>

      {/* Contenedor 3 tarjetas de Combos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
       

       
        {offers.map((offer: OfferItem) => {

          // construimos el mensaje predefinido dinamicamente 
          
          const whatsappMessage=encodeURIComponent(`Hola, quiero la oferta: *${offer.title}* (${offer.price}). ¿Me comunican los detalles para recibirlo? `)
          const whatsappUrl=`https://wa.me/${phone}? text=?${whatsappMessage}`

          return (

          <div
            key={offer.ofer}
            className="border border-gray-200 p-6 gap-4 bg-white rounded-xl"
          >
            <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-4">
              <span className={`${offer.featured ? "text-red-600":"text-gray-500"} text-sm font-semibold`}>
                {offer.tag}
              </span>{" "}
              <span className="text-right text-gray-300">●</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              {offer.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {offer.description} 
            </p>
            <div className="flex flex-cols sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-1 mb-4">
              <h2 className="text-black text-2xl font-bold">{offer.price}</h2>{" "}
              <span className="text-xs  text-gray-300">ARS</span>
            </div>

            {/* Aca se renderiza cada item que trae esta oferta */}
            {offer.items.map((detail: string, index: number) => (
              <p key={index} className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
                <span>
                  <Check className={`w-4 h-4 font-bold ${offer.featured ? "text-red-600" :"text-green-400"} "`} />
                </span>
                {detail}
              </p>
            ))}

            <a
              className={`inline-flex items-center justify-center gap-2 w-full text-black
               uppercase text-sm font-bold mt-14 border  rounded-xl py-2.5 px-4 hover:bg-red-300 hover:text-white
               transition-colors ${offer.featured ? "bg-red-600 border-red-600 text-white" :"bg-white border-gray-300 text-black"}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleText color={offer.featured ? "white" : "black"} /> pedir por whatsapp
            </a>
          </div>
        )})}
      </div>
    </section>
  );
}

export default Offers;
