import React from "react";
import Image from "next/image";

const Valores = () => {
    return <>
        <div className="grid place-items-center bg-standard h-4/5" id="valores">
            <div className="text-center lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 h-32 bg-black rounded-md mt-4">
                <h3 className="text-4xl text-standard place-items-center mt-4">
                    <strong className="mt-9 text-standard sm:text-4xl text-xl">
                        NO QUE
                        <br />
                        ACREDITAMOS
                    </strong>
                </h3>
            </div>
            <div>
                <div className="grid grid-cols-3 text-black lg:gap-56 md:gap-36 sm:gap-24 mobile:gap-16 mobile-2:gap-12 mobile-3:gap-8 gap-4 text-center place-items-center">
                    <div>
                        <Image src="/img/ideias.png" alt="valores" className="mobile-3:w-1/7 mobile-2:w-2/7 mobile:3/7 w-1/7" width={100} height={125} />
                        <p>
                            <strong>
                                RACIONALISMO
                            </strong>
                        </p>
                    </div>
                    <div>
                        <Image src="/img/ideias.png" alt="valores" className="mobile-3:w-1/7 mobile-2:w-2/7 mobile:3/7 w-1/7" width={100} height={125} />
                        <p>
                            <strong>
                                LIBERDADE
                            </strong>
                        </p>
                    </div>
                    <div>
                        <Image src="/img/ideias.png" alt="valores" className="mobile-3:w-1/7 mobile-2:w-2/7 mobile:3/7 w-1/7" width={100} height={125} />
                        <p>
                            <strong>
                                RESPEITO
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-black place-items-center text-center">
                    <div className="place-items-center">
                        <Image src="/img/ideias.png" alt="valores" className="mobile-3:w-1/7 mobile-2:w-2/7 mobile:3/7" width={100} height={125} />
                        <p>
                            <strong>
                                JUVENTUDE
                            </strong>
                        </p>
                    </div>
                    <div className="place-items-center">
                        <Image src="/img/ideias.png" alt="valores" className="mobile-3:w-1/7 mobile-2:w-2/7 mobile:3/7" width={100} height={125} />
                        <p>
                            <strong>
                                RESPONSABILIDADE
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Valores; 