import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselTablet from './carousels/tablet';
import CarouselDesktop from './carousels/desktop';
import CarouselMobile from './carousels/mobile';

const About = () => {
    return <>
        <div className="text-center mt-6">
            <span className="text-5xl text-standard items-center">
                <b>
                    QUEM SOMOS
                </b>
            </span>
            <div className="grid place-items-center grid-cols-12 text-left">
                <div className="sm:col-start-1 sm:col-end-6 sm:block hidden">
                    <div className="container mx-auto">
                        <div className="lg:ml-36 md:ml-12 flex justify-center w-full h-full py-24 sm:py-8 px-4">
                            <CarouselMobile />
                        </div>
                    </div>
                </div>
                <div className="sm:text-left text-center sm:col-start-7 sm:col-end-13 col-start-1 col-end-13 mr-6 ml-6 mb-12 bg-red md:w-3/4 w-3/5 mt-0">
                    <p className="mt-2">
                        A UJL, União, Juventude e Liberdade,
                        é uma união de jovens dispostos a discutir os problemas enfrentados por estudantes secundaristas e universitários brasileiros,
                        pautando sempre a defesa das liberdades individuais.
                    </p>
                    <p className="mt-2">
                        Surgida de dentro da ONG Students For Liberty Brazil, em 4 de julho de 2020,
                        a UJL foi criada para participar do LibertyLab e acabou se tornando a vencedora do Hackaton Liberal no começo de 2021.
                        Posteriormente, fomos agraciados com os três prêmios que compõem o SFLB Awards e disputamos o prêmio internacional de grupo do ano pelo SFL Inc.
                    </p>
                    <p className="mt-2">
                        Em um ano, sem qualquer tipo de orçamento,
                        a UJL veio a se tornar o maior grupo estudantil liberal do Brasil, contando agora com quase três mil membros e mais de 200 lideranças ativas em todos os estados da federação e no Distrito Federal. Ao longo de dois anos, foram mais de 20 mil reais arrecadados para diversos projetos sociais,
                        além de parcerias fechadas com diversas instituições em mais de 5 países diferentes.
                    </p>
                    <p className="mt-2">
                        Estamos apenas começando,
                        se você quer ser um agente de mudança e defender a liberdade na sua universidade,
                        vem conosco fazer história
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default About;