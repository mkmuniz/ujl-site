import Image from "next/image";
const Header = () => {
    return <>
        <header>
            <div className="bg-cover bg-header h-screen grid grid-cols-6 gap-4 content-center ...">
                <div className="col-start-2 col-span-3">
                    <span className="text-6xl font-league font-semibold whitespace-nowrap text-standard w-50">UNIÃO <br /> JUVENTUDE E <br /> LIBERDADE</span>
                    <p className="border-b w-56">Faremos história!</p>
                </div>
                <div className="col-start-5 col-end-8">
                    <Image src="/img/logo.svg" alt="Logo" width={200} height={30} />
                </div>
            </div>
        </header>
    </>
};

export default Header;