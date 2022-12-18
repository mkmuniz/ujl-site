import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return <>
        <footer>
            <div className="bg-cover h-screen grid grid-cols-6 gap-4 content-center border-b-2 border-[#FFC700]">
                <div className="col-start-2 col-span-3">
                    <span className="md:text-7xl sm:text-5xl text-2xl font-league font-semibold">
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
                <div className="col-start-5 col-end-8 h-20 mt-14 sm:mt-20 md:mt-24">
                    <button href="#" className="h-12 w-24 text-1xl sm:w-36 sm:h-16 md:text-2xl md:w-44 bg-standard text-black font-bold rounded">
                        <strong>Junte-se</strong>
                    </button>
                </div>
            </div>
            <div className="bg-cover grid grid-cols-6 gap-4 content-center">
                <div className="col-start-1 col-end-3 ml-6 w-56">
                    <Image src="/img/ujl.png" alt="ujl" width={200} height={250} />
                    <p className="border-b border-[#FFC700] sm:w-56 w-28 font-josefin font-thin pb-2 pt-2">Faremos história!</p>
                    <div class="grid grid-cols-5 mt-5">
                        <div><FaFacebook /></div>
                        <div><FaTwitter /></div>
                        <div><FaInstagram /></div>
                        <div><FaTiktok /></div>
                        <div><FaYoutube /></div>
                    </div>
                </div>
                <div className="col-start-4 col-end-8 h-20 mt-4 sm:mt-6 md:mt-10">
                    <div class="grid grid-cols-5 mt-5">
                        <div className="border-l h-56 border-[#FFC700]">
                            <ul className="pl-5">
                                <li>
                                    <span className="text-2xl">
                                        <b>
                                            INSTITUCIONAL
                                        </b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-24">
                            <ul className="">
                                <li>
                                    <span className="text-2xl">
                                        <b>
                                            +UJL
                                        </b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
};

export default Footer;