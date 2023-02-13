import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
    const [isColappsed, setCollapse] = useState(false);

    return <>
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="flex flex-wrap justify-between m-auto">
                <Link href="/" className="flex items-center m-0 p-0">
                    <Image src="/img/ujl.png" alt="ujl" width={85} height={85} />
                </Link>
                <button onClick={() => isColappsed ? setCollapse(false) : setCollapse(true)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 right-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${isColappsed ? "sm-hidden" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-standard md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Institucional</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-standard md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-standard md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contribua</Link>
                        </li>
                        <li>
                            <Link href="/contato" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-standard md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</Link>
                        </li>
                        <li>
                            <Link href="https://chat.whatsapp.com/KPoa8wzq1PX4HsEgDmyVsO" className="py-2 ml-3 pl-3 pr-4 bg-standard text-black font-bold rounded">
                                <strong>Junte-se</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default NavBar;