 /**
 * Componente Navbar
 * Este componente es el componente princpal de navegacion
 *  contiene el logotipo y el slogn, estado del local y boton de mensaje
 *
 * @returns 
 * 
 */


function Navbar() {
    return (
        <nav className="h-[82px] flex items-center px-5 bg-gray-50  sm:px-[54px] border-b border-gray-200 gap-6">
            {/* Brand - Logotipo y Slogan de nuestra landing */}
            {/* <a href=""
            className="flex items-center gap-2.5"
            >
                <span className="text-lg font-black tracking-wide uppercase">DON RAM<span className="text-red-600">Ó</span>N</span>
                <span className="text-gray-300 text-xs">|</span>
                <span className="text-xs text-gray-400 ">VERDULERIA FAMILIAR</span>
            </a> */}
            {/* Estado del negocio y Mensaje corto */}
            <div className="bg-white items-center flex text-xs rounded-full gap-2 px-2 ">
                <span className="text-green-600 text-lg">•</span>
                <span className="font-semibold text-gray-800">Abierto hoy</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400">Cosecha fresca del dia</span>
            </div>

            {/* Boton para la comunicacion directa con el vendedor */}
            <div className="border-2 border-dashed border-black/15 bg-indigo-300 text-slate-900 rounded-full w-[36px] h-[36px] flex justify-center items-center font-bold">
                M
            </div>
        </nav>
    );
}

export default Navbar;