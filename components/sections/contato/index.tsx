import React from "react";

export default function ContactSection() {
    return <>
        <div className="grid place-items-center">
            <div className="w-3/4 bg-standard rounded text-center">
                <h3 className="text-4xl place-items-center mt-4 text-black">
                    <strong className="mt-9">
                        ENTRE EM
                        <br />
                        CONTATO CONOSCO
                    </strong>
                </h3>
                <div className="relative z-0">
                    <button className="h-12 w-24 text-1xl sm:w-36 sm:h-16 md:text-2xl md:w-44 bg-black font-bold rounded text-white mt-6 mb-6">
                        <strong>E-mail</strong>
                    </button>
                </div>
            </div>
        </div>
    </>
}