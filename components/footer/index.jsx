import React from 'react';
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return <>
        <footer>
            <div className="bg-cover lg:h-screen sm:h-5/6 grid grid-cols-6 gap-4 content-center border-b-4 border-[#FFC700]">
                <div className="mobile-2:col-start-2 mobile-2:col-span-3 col-start-2 ml-3 mobile:mt-6 mobile-2:place-items-left place-items-center lg:mt-0 lg:mb-0 md:mt-24 md:mb-24 sm:mt-16 sm:mb-16 mt-12 mb-12">
                    <span className="md:text-7xl sm:text-5xl mobile:mt-6 mobile:text-5xl mobile-2:text-4xl mobile-3:text-3xl text-2xl font-league font-semibold">
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
                <div className="col-start-5 col-end-8 h-20 mobile:mt-36 mobile-2:mt-40 mobile-3:mt-52 mt-52 sm:mt-32 md:mt-52 lg:mt-32">
                    <button className="mobile-3:h-10 mobile-3:w-24 h-10 w-20 text-1xl sm:w-36 sm:h-16 md:text-2xl md:w-44 bg-standard text-black font-bold rounded">
                        <Link href="https://chat.whatsapp.com/KPoa8wzq1PX4HsEgDmyVsO">
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
                        <div className="mobile-footer:visible invisible border-l h-56 border-[#FFC700] col-start-1 col-end-3">
                            <span className="md:text-2xl pl-5">
                                <b>
                                    INSTITUCIONAL
                                </b>
                            </span>
                            <ul className="pl-5 mt-5">
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <Link href="#quemSomos">
                                            Quem somos
                                        </Link>
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <Link href="#valores">
                                            Valores
                                        </Link>
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <Link href="#liderancas">
                                            Lideranças
                                        </Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="font-thin">
                                        <Link href="/">
                                            Bancadas
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile:visible invisible col-start-4 col-end-5">
                            <span className="md:text-2xl">
                                <b>
                                    +UJL
                                </b>
                            </span>
                            <ul className="mt-5">
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <a href="/" target="_blank" rel="noreferrer">
                                            Blog
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <a href="https://youtube.com/playlist?list=PLyFTR4Wm9RX8PjNQdbmXwnh1tS04wHTKp" target="_blank" rel="noreferrer">
                                            Podcast
                                        </a>
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="font-thin">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSelC29oAUcsRv3pW01mh-eY1ThsNFmhjCCPu92u2r51hW-c7Q/viewform" target="_blank" rel="noreferrer">
                                            Newsletter
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile:hidden visible col-start-1 col-end-3 mt-6">
                <span className="md:text-2xl pl-5">
                    <b>
                        +UJL
                    </b>
                </span>
                <ul className="mt-5 pl-5">
                    <li className="mb-4">
                        <span className="font-thin">
                            <a href="/" target="_blank" rel="noreferrer">
                                Blog
                            </a>
                        </span>
                    </li>
                    <li className="mb-4">
                        <span className="font-thin">
                            <a href="https://youtube.com/playlist?list=PLyFTR4Wm9RX8PjNQdbmXwnh1tS04wHTKp" target="_blank" rel="noreferrer">
                                Podcast
                            </a>
                        </span>
                    </li>
                    <li className="mb-4">
                        <span className="font-thin">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSelC29oAUcsRv3pW01mh-eY1ThsNFmhjCCPu92u2r51hW-c7Q/viewform" target="_blank" rel="noreferrer">
                                Newsletter
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="mobile-footer:hidden visible col-start-1 col-end-3">
                <span className="md:text-2xl pl-5">
                    <b>
                        INSTITUCIONAL
                    </b>
                </span>
                <ul className="pl-5 mt-5">
                    <li className="mb-4">
                        <span className="font-thin">
                            <Link href="#quemSomos">
                                Quem somos
                            </Link>
                        </span>
                    </li>
                    <li className="mb-4">
                        <span className="font-thin">
                            <Link href="#valores">
                                Valores
                            </Link>
                        </span>
                    </li>
                    <li className="mb-4">
                        <span className="font-thin">
                            <Link href="#liderancas">
                                Lideranças
                            </Link>
                        </span>
                    </li>
                    <li>
                        <span className="font-thin">
                            <Link href="/">
                                Bancadas
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="mt-36 mb-0 grid place-items-center text-center">
                <p>Desenvolvido por AgentesDev - UJL © 2023 União Juventude e Liberdade</p>
            </div>
        </footer>
    </>
};

export default Footer;