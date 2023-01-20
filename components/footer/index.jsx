import React from 'react';
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return <>
        <footer>
            <div className="bg-cover lg:h-screen sm:h-5/6 grid grid-cols-6 gap-4 content-center border-b-4 border-[#FFC700]">
                <div className="col-start-2 col-span-3 mobile:mt-6 lg:mt-0 lg:mb-0 md:mt-24 md:mb-24 sm:mt-16 sm:mb-16 mt-12 mb-12">
                    <span className="md:text-7xl sm:text-5xl mobile:mt-6 mobile:text-5xl text-3xl font-league font-semibold">
                        <span className="text-standard">
                            JUVENTUDE
                        </span>
                        <br />
                        ATIVISMO & <br />
                        <span className="text-standard">
                            LIBERDADE & <br />
                        </span>
                        <span>
                            CERVEJA &<br />
                        </span>
                        <span className="text-standard">
                            VEM PARA A UJL</span>
                    </span>
                </div>
                <div className="col-start-5 col-end-8 h-20 mobile-3:mt-28 mt-52 mobile:mt-44 mobile-2:mt-28 sm:mt-32 md:mt-52 lg:mt-32">
                    <button className="h-12 w-24 text-1xl sm:w-36 sm:h-16 md:text-2xl md:w-44 bg-standard text-black font-bold rounded">
                        <Link href="/contato">
                            <strong>Junte-se</strong>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="bg-cover grid grid-cols-6 gap-4 content-center mt-6">
                <div className="col-start-1 col-end-3 ml-6 w-56">
                    <Image src="/img/ujl.png" alt="ujl" width={150} height={250} />
                    <p className="border-b border-[#FFC700] sm:w-56 w-28 font-josefin font-thin pb-2 pt-2">Faremos história!</p>
                    <div className="grid grid-cols-5 mt-5">
                        <div>
                            <Link href="https://www.facebook.com/ujliberdade/">
                                <FaFacebook />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://twitter.com/ujliberdade">
                                <FaTwitter />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/ujliberdade/">
                                <FaInstagram />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.tiktok.com/@ujliberdade">
                                <FaTiktok />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.youtube.com/c/UJLUNIÃOJUVENTUDEELIBERDADE">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-start-4 col-end-8 h-20 mt-4 sm:mt-6 md:mt-10">
                    <div className="grid grid-cols-5 mt-5">
                        <div className="border-l h-56 border-[#FFC700] col-start-1 col-end-3">
                            <span className="md:text-2xl pl-5">
                                <b>
                                    INSTITUCIONAL
                                </b>
                            </span>
                            <ul className="pl-5 mt-5">
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Quem somos
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Valores
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Lideranças
                                    </span>
                                </li>
                                <li>
                                    <span className="font-thin">
                                        Bancadas
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-start-4 col-end-5">
                            <span className="md:text-2xl">
                                <b>
                                    +UJL
                                </b>
                            </span>
                            <ul className="mt-5">
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Blog
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Podcast
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        Newsletter
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen mt-36 mb-0 grid place-items-center text-center">
                <p>Desenvolvido por AgentesDev - UJL © 2022 União Juventude e Liberdade</p>
            </div>
        </footer>
    </>
};

export default Footer;