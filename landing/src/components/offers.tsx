/**
 * Componente Offers
 * El componente contiene tarjetas de los combos destacados de
 * la semana, su precio y contenido, cada uno con su respectivo boton
 * para realizar el pedido.
 *
 * @returns
 *
 */

import { Check, MessageCircleText } from "lucide-react";

function Offers() {
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
        <span className="text-sm text-gray-500">Sin suscripcion obligatoria <span>•</span> Pagas al recibir</span>
      </div>
      
      {/* Contenedor 3 tarjetas de Combos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">


        {/* Combo 1        */}
        <div className="border border-gray-200 p-6 gap-4 bg-white rounded-xl">
            <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-4">
              <span className="text-gray-500 text-sm font-semibold">(OLLA & ENSALADA)</span> <span className="text-right text-gray-300">●</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Combo esencial 
              
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Verduras indispensables de olla y ensalada rapida de todos los dias.
            </p>
            <div className="flex flex-cols sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-1 mb-4">
              <h2 className="text-black text-2xl font-bold">$9.500</h2> <span className="text-xs  text-gray-300">ARS</span>
            </div>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Papa, cebolla, zanahoria (4 kg total)
            </p>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>1 planta de lechuga mantecosa
            </p>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>1 kg tomate redondo maduro
            </p>
            <a
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-black uppercase text-sm font-bold mt-8 border border-gray-300 rounded-xl py-2.5 px-4 hover:bg-green-500 transition-colors"
              href=""
            >
             <MessageCircleText color="black"/> pedir por whatsapp
            </a>
        </div>


        {/* Combo 2        */}
        <div className="border border-red-600 p-6 gap-4 bg-white rounded-xl">
            <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-4">
              <span className="text-red-600 text-sm font-semibold">(COSECHA COMPLETA)</span> <span className="text-right text-gray-300">●</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Cajon Familiar Don Ramon 
              
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Rinde 5 a 7 dias para 3-4 personas Seleccion premium de huerta.
            </p>
            <div className="flex flex-cols sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-1 mb-4">
              <h2 className="text-black text-2xl font-bold">$14.500</h2> <span className="text-xs  text-gray-300">ARS</span>
            </div>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>8 a 10 kg netos de huerta
            </p>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Papas, tomates, zanahorias, zapallitos          </p>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Hojas verdes crocantes + 2 paltas Hass            </p>
            <p className="text-xs text-gray-500 my-1 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Limones bonificados de regalo          </p>  
            <a
              className="inline-flex items-center justify-center gap-2 w-full bg-red-600 text-white uppercase text-sm font-bold mt-8 border border-gray-300 rounded-xl py-2.5 px-4 hover:bg-green-500 transition-colors"
              href=""
            >
             <MessageCircleText color="white"/> pedir por whatsapp
            </a>
        </div>


        {/* Combo 3        */}
        <div className="border border-gray-200 p-6 gap-4 bg-white rounded-xl">
            <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-4">
              <span className="text-gray-500 text-sm font-semibold">(MIX BALANCEADO)</span> <span className="text-right text-gray-300">●</span>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">
              Combo Frutas & Huerta 
              
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              El equilibrio perfecto entre frutas dulces de estacion y verduras frescas.
            </p>
            <div className="flex flex-cols sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-1 mb-4">
              <h2 className="text-black text-2xl font-bold">$12.000</h2> <span className="text-xs  text-gray-300">ARS</span>
            </div>
            <p className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Manzanas rojas crujientes y bananas
            </p>
            <p className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Citricos dulces de estacion
            </p>
            <p className="text-xs text-gray-500 font-semibold flex items-center gap-1.5">
              <span><Check className="w-3 h-3 text-green-500 " /></span>Verduras basicas para la semana
            </p>
            <a
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-black uppercase text-sm font-bold mt-8 border border-gray-300 rounded-xl py-2.5 px-4 hover:bg-green-500 transition-colors"
              href=""
            >
             <MessageCircleText color="black"/> pedir por whatsapp
            </a>
        </div>
      
      
      </div>
   </section>
  );
}

export default Offers;
