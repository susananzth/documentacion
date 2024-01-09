import myLogo from './assets/logo.png'

function Nav() {
    return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div>
                <a href="#" className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0">
                    <img src={myLogo} className="h-9 mr-2" alt="Logo de susananzth" loading="lazy" />
                    SusanaNzth
                </a>
            </div>

            <button
                className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className="!visible mt-2 hidden items-center lg:mt-0 lg:!flex lg:basis-auto">
                <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row">
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            Inicio
                        </a>
                    </li>
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com/#about" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            Sobre mi
                        </a>
                    </li>
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com/#portfolio" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            Proyectos
                        </a>
                    </li>
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com/documentacion" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            Blog
                        </a>
                    </li>
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com/#contact" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            Contacto
                        </a>
                    </li>
                    <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
                        <a href="https://susananzth.com/#contact" 
                            className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 
                            disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 
                            dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                            <span className="d-none d-lg-inline-block">Curriculum</span> CV
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav
