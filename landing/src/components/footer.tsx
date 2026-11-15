/**
 * Componente Footer
 * El componente contiene cuatro columnas con informacion del negocio
 * relevante para el cliente.
 *
 * @returns
 *
 */

import { Clock, MapPin, MessageCircle, MessageCircleText, Motorbike } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Grilla principal de cuatro columnas */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 border-b border-gray-200 md:grid-cols-4 gap-6 pb-6 ">
          {/* Columna 1: Marca / Sobre nosotros */}
          <div>
            <h3 className="text-base font-bod uppercase text-gray-900 mb-3">
              Don Ramon  
              <span className="text-xs ml-2 font-normal text-gray-500 block sm:inline ">
                Verduleria Familiar
              </span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Verduleria tienda de Barrio: seleccionamos cada cajon al amanecer
              para que llegue fresco y al mejor precio
            </p>
            <p className="text-xs text-green-700 font-semibold flex items-center gap-1.5">
              <span>●</span>Compromiso directo con la huerta
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-sm tracking-wider font-bold uppercase text-gray-900 mb-3">
              Horarios de atencion
            </h4>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="text-gray-400" />
                <div>
                  <span className="font-semibold text-gray-800 block">lunes a sabados</span>
                  <span>8:00 hrs. a 20.30 hrs. (corrido)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-gray-400" />
                <div>
                  <span className="font-semibold text-gray-800 block">Domingos</span>
                  <span>9:00 hrs. a 13.30 hrs.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-sm tracking-wider font-bold uppercase text-gray-900 mb-3">
              Ubicacion y envios
            </h4>
            <ul className="text-sm text-gray-500 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="text-gray-400" />
                <div>
                  <span className="font-semibold text-gray-800 block">
                    Avenida San Martin 1420
                  </span>
                  <span>Retiro rapido sin fila por el local</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Motorbike className="text-gray-400" />
                <div>
                  <span className="font-semibold text-gray-800 block">Zonas de reparto</span>
                  <span>Resistencia y al rededores</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h4 className="text-sm tracking-wider font-bold uppercase text-gray-900 mb-3">
              Contacto Directo
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Pedi directamente por whatsapp sin intermediarios ni demoras
            </p>
            <a
              className="inline-flex items-center justify-center gap-2 w-full bg-black text-white text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-colors"
              href=""
            >
             <MessageCircleText color="white"/> Escribinos al whatsapp
            </a>
            <p className="text-xs text-gray-500 mt-2">Garantia de cambio si algo llega en mal estado</p>
          </div>
        </div>
        {/* Barra inferior copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 pt-6 gap-4">
          <p>
            © 2026 - Don Ramon Verduleria Familiar - Todos los drerechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Calidad de huertas nacionales</span>
            <span>•</span>
            <span>Atencion perzonalizada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
