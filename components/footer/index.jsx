import Image from "next/image";

const Footer = () => {
    return <>
        <footer>
            <div className="bg-cover h-screen grid grid-cols-6 gap-4 content-center border-b-2 border-[#FFC700] ...">
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
        </footer>
    </>
};

export default Footer;