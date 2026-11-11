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
        <nav className="h-[82px] flex items-center px-5  sm:px-[54px] border-b border-slate-300 gap-6 bg-sky-100">
            {/* Brand - Logotipo y Slogan de nuestra landing */}
            <div className="border-2 border-dashed border-black/15 rounded p-4">
                LOGO - SLOGAN
            </div>
            {/* Estado del negocio y Mensaje corto */}
            <div className="border-2 border-dashed border-black/15 rounded p-4 ml-auto">
                ESTADO / MENSAJE
            </div>

            {/* Boton para la comunicacion directa con el vendedor */}
            <div className="border-2 border-dashed border-black/15 bg-indigo-300 text-slate-900 rounded-full w-[36px] h-[36px] flex justify-center items-center font-bold">
                M
            </div>
        </nav>
    );
}

export default Navbar;