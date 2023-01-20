import React from "react";
import Image from "next/image";
const Header = () => {
    return <>
        <header>
            <div className="bg-cover bg-header mobile:h-screen grid grid-cols-6 gap-4 content-center">
                <div className="col-start-2 mobile:ml-36 mobile-2:ml-20 mobile-3:ml-12 ml-6 mb-12 mobile:col-span-3 mobile:text-left text-center mobile:block grid place-items-center">
                    <div className="mobile:hidden mobile:mt-6 mt-12">
                        <Image src="/img/logo.svg" alt="Logo" width={100} height={50} />
                    </div>
                    <span className="md:text-7xl sm:text-5xl mobile:text-4xl text-3xl font-league font-semibold text-standard">UNIÃO <br /> JUVENTUDE E <br /> LIBERDADE</span>
                    <p className="border-b border-[#FFC700] mobile:w-56 w-28 font-josefin">Faremos história!</p>
                </div>
                <div className="mobile:col-start-5 mobile:col-end-8 mobile:w-2/4 mobile:visible invisible">
                    <Image src="/img/logo.svg" alt="Logo" width={150} height={75} />
                </div>
            </div>
        </header>
    </>
};

export default Header;