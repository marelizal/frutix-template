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

        <section className="bg-amber-50 p-[28px_22px] sm:p-[42px_54px]">
            {/* Kicker */}
            <div className="border-2 border-dashed border-black/15 inline-block rounded p-2 font-extrabold text-md">
                Etiqueta superior -  Kicker
            </div>


            {/* Hero Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-[14px] gap-6">
                <div className="border-2 border-dashed border-black/15 bg-orange-300 rounded-lg p-3 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold mb-2">TITULO PRINCIPAL</div>
                <div className="border-2 border-dashed border-black/15 bg-orange-300 rounded-lg p-3 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold">DE LA LANDING</div>
                <div className="border-2 border-dashed border-black/15 bg-orange-300 rounded-lg p-3 text-[30px] sm:text-[42px] leading-[1.1] tracking-tight font-bold">EN VARIAS LINEAS</div>
            </div>

            {/* Mensaje de Disponibilidad  */}
            <div className="border-2 border-dash border-black/15 inline-block  bg-yellow-200 rounded-full p-4 p-[2px_3px] font-bold mt-4">
                MENSAJE DE DISPONIBILIDAD / ENTREGA 
            </div>
        </section>
    );
}

export default Hero