import React from "react";
import Image from "next/image";

const Valores = () => {
    return <>
        <div className="grid place-items-center bg-standard h-4/5">
            <div className="text-center lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 h-32 bg-black rounded-md mt-4">
                <h3 className="text-4xl text-standard place-items-center mt-4">
                    <strong className="mt-9 text-standard sm:text-2xl text-xl">
                        NO QUE
                        <br />
                        ACREDITAMOS
                    </strong>
                </h3>
            </div>
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 place-items-center flex text-black">
                    <div className="text-center place-items-center">
                        <Image src="/img/ideias.png" alt="valores" width={100} height={125} />
                        <strong>RACIONALISMO</strong>
                    </div>
                    <div className="text-center place-items-center lg:ml-56 lg:mr-56 md:ml-32 md:mr-32 sm:mr-16 sm:ml-16 ml-8 mr-8">
                        <Image src="/img/ideias.png" alt="valores" width={100} height={125} />
                        <strong>LIBERDADE</strong>
                    </div>
                    <div className="text-center place-items-center">
                        <Image src="/img/ideias.png" alt="valores" width={100} height={125} />
                        <strong>RESPEITO</strong>
                    </div>
                </div>
                <div className="grid grid-cols-2 flex text-black mb-12">
                    <div className="place-items-center lg:mr-32 ml-6">
                        <Image src="/img/ideias.png" alt="valores" width={100} height={125} />
                        <strong>JUVENTUDE</strong>
                    </div>
                    <div className="place-items-center lg:ml-32 md:ml-24 sm:ml-12">
                        <Image src="/img/ideias.png" alt="valores" width={100} height={125} />
                        <strong>RESPONSABILIDADE</strong>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Valores; 