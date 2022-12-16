import Image from "next/image";
const Header = () => {
    return <>
        <header>
            <div className="bg-cover bg-header h-screen grid grid-cols-6 gap-4 content-center ...">
                <div className="col-start-2 col-span-3">
                    <span className="md:text-7xl sm:text-5xl text-2xl font-league font-semibold text-standard">UNIÃO <br /> JUVENTUDE E <br /> LIBERDADE</span>
                    <p className="border-b border-[#FFC700] sm:w-56 w-28">Faremos história!</p>
                </div>
                <div className="col-start-5 col-end-8">
                    <Image src="/img/logo.svg" alt="Logo" width={200} height={100} />
                </div>
            </div>
        </header>
    </>
};

export default Header;