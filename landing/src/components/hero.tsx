/**
 * Componente Hero
 * Este componente contiene titulo y subtitulo, seccion informativa, nombres de
clientes que ya realizaron pedidos, y boton de pedir por whatsapp y contiene la 
barra de navegacion.
 *
 * @returns 
 * 
 */

import Navbar from "./header";

function Hero() {
  return (
    <section className="bg-gray-50 p-[28px_22px] sm:p-[42px_54px]">
      {/* Kicker */}
      <div className="flex flex-wrap items-center gap-2 mt-1">
        <div className="bg-white text-red-500 items-center inline-flex text-xs rounded-full gap-2 px-2 py-1 font-bold w-fit">
          ( COSECHA DE LA MAÑANA )
        </div>
        <span className="text-xs text-gray-400 ">
          Maestro seleccionador de huerta familiar
        </span>
      </div>
      {/* Hero Info */}
      <div className="flex flex-col items-start mt-6 bg-slate-150 ">
        <div className="bg-gray-50 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold ">
          LO MEJORCITO DEL
        </div>
        <div className="bg-gray-50 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold">
          CAJON DIRECTO A TU
        </div>
        <div className="bg-gray-50 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold">
          MESA
        </div>
      </div>

      {/* Mensaje de Disponibilidad  */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mt-4 w-full">
      
      <div className="bg-white items-center flex text-xs rounded-full gap-2 px-2 mt-4 font-bold w-fit">
        <span className="text-green-600 text-xl">•</span> (Listo para retirar o
        envio a tu domicilio en el dia)
      </div>

      <div className="flex flex-col sm:items-end text-left sm:text-right">
      <span className="text-xs text-green-600 border border-gray-50 rounded-full gap-2 px-2 bg-gray-200/70 mt-4 font-semibold mb-2">
        ( Cero intermediarios)
      </span>
      <p className="text-xs text-gray-500">
        Frutas y verduras de productores seleccionados
      </p>
      </div>
      </div>
    </section>
  );
}

export default Hero;
