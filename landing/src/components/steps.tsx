/**
 - Componente Steps
 - El componente contiene tarjetas con los pasos a seguir para realizar el pedido de los combos.  
 - @returns 
 */


import stepsdata from "../../data.json";

// 1. Definimos la interfaz que describe cada paso
interface StepItem {
  step: number;
  title: string;
  description: string;
}

function Steps() {
  // 2. Tipamos y aseguramos que los datos importados del JSON cumplan con la estructura aquí
  const steps = stepsdata.steps as StepItem[];

  return (
    <section className="bg-gray-50 p-3 py-12">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center text-center sm:text-left gap-3 sm:gap-4 mb-8">
        <h2 className="text-xl font-bold uppercase text-gray-900">
          <span className="text-red-600">✦</span> ¿COMO FUNCIONA? (ESCANEABLE EN 3 SEGUNDOS)
        </h2>
        <span className="text-sm text-gray-500">[Proceso Directo]</span>
      </div>

      {/* Contenedor de tarjetas mapeadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {steps.map((item: StepItem) => (
          <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-start gap-4" >
            {/* 3. Usamos llaves {} para renderizar el número y activar el autocompletado */}
            <span className="w-9 h-9 rounded-lg text-red-600 font-bold flex items-center justify-center shrink-0 mb-2">
            {item.step}  
            </span>
            <div>
              <h3 className="uppercase text-lg font-bold text-gray-900 mb-1">
               {item.title} 
              </h3>
              <p className="text-sm text-gray-500">
               {item.description} 
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;