/**
 * Componente Steps
 * El componente contiene tarjetas con los pasos a seguir para realizar el pedido de 
los combos.  
 *
 * @returns 
 * 
 */

function Steps() {
  return (
    <section className="bg-red-500 p-3 py-12 ">

      {/* Encabezado */}
      <div className="flex flex-cols sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-8">
        <h2 className=" text-xl font-bold uppercase text-gray-900"> 
          ¿COMO FUNCIONA? (ESCANEABLE EN 3 SEGUNDOS)
        </h2>
        <span className="text-sm text-gray-500">[Proceso Directo]</span>
      </div>
      
      
      {/* Aqui comienza el contenedor de las tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">


        {/* Tarjeta 1        */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-start gap-4">
          <span className="w-9 h-9 rounded-lg bg-green-600 text-white font-bold flex items-center justify-center shrink-0 mb-2">
            1
          </span>
          <div>
            <h3 className="uppercase text-lg font-bold text-gray-900 mb-1">
              Elegir combo por whatsapp
            </h3>
            <p className="text-sm text-gray-700">
              Nos escribis y te lo preparamos en un toque
            </p>
          </div>
        </div>


        {/* Tarjeta 2        */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-start gap-4">
          <span className="w-9 h-9 rounded-lg bg-green-600 text-white font-bold flex items-center justify-center shrink-0 mb-2">
            2
          </span>
          <div>
            <h3 className="uppercase text-lg font-bold text-gray-900 mb-1">
              Te lo alcanzamos o retiras
            </h3>
            <p className="text-sm text-gray-700">
              Reparto en el dia en todo el barrio o retiro rapido por el mostrador
            </p>
          </div>
        </div>


        {/* Tarjeta 3        */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-start gap-4">
          <span className="w-9 h-9 rounded-lg bg-green-600 text-white font-bold flex items-center justify-center shrink-0 mb-2">
            3
          </span>
          <div>
            <h3 className="uppercase text-lg font-bold text-gray-900 mb-1">
              Pagas facil
            </h3>
            <p className="text-sm text-gray-700">
              Abonas al recibir: Mercado Pago  Transferencia o Efectivo con 10% off
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
