import React from "react";

export default function News() {
    return <>
        <div className="grid place-items-center bg-standard border-t-2 border-black">
            <div className="bg-black sm:mt-6 sm:mb-6 rounded text-center lg:w-3/4 sm:w-4/5 w-screen">
                <h1 className="text-standard text-4xl mt-6">
                    <strong className="mt-9">
                        NOTÍCIAS E ARTIGOS
                    </strong>
                </h1>
                <div className="container flex-grow w-full mx-auto px-0">
                    <div className="mx-auto w-full md:w-4/5 px-4">
                        <div className="container my-8">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">
                                    </button>
                                    <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">
                                    </button>
                                </div>
                            </div>
                            <div id="scrollContainer" className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
                                <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray">
                                    <a href="#" className="space-y-4">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                                src="https://i.ytimg.com/vi/pE7l4mDQ7lc/maxresdefault.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="px-4 py-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="font-bold text-black sm:text-3xl text-xl mb-2">
                                                    MONARK FOI DE BASE
                                                </h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ad recusandae, consequatur corrupti vel quisquam id itaque
                                                    nam
                                                </p>
                                                <p className="font-medium text-sm text-indigo-600 mt-2">
                                                    Read more<span className="text-indigo-600">&hellip;</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray"
                                >
                                    <a href="#" className="space-y-4">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                                src="https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/ed48bn8jlmi7.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="px-4 py-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="font-bold text-black sm:text-3xl text-xl mb-2">
                                                    PÃO CHEGOU A R$ 9000
                                                </h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ad recusandae, consequatur corrupti vel quisquam id itaque
                                                    nam
                                                </p>
                                                <p className="font-medium text-sm text-indigo-600 mt-2">
                                                    Read more<span className="text-indigo-600">&hellip;</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray"
                                >
                                    <a href="#" className="space-y-4">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                                src="https://pbs.twimg.com/profile_images/1543942521541238784/yt3aRLGz_400x400.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="px-4 py-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="font-bold text-black sm:text-3xl text-xl mb-2">
                                                    CAROLIS ESPIÃ DA UJS?
                                                </h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ad recusandae, consequatur corrupti vel quisquam id itaque
                                                    nam
                                                </p>
                                                <p className="font-medium text-sm text-indigo-600 mt-2">
                                                    Read more<span className="text-indigo-600">&hellip;</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray"
                                >
                                    <a href="#" className="space-y-4">
                                        <div className="aspect-w-16 aspect-h-9 h-1/2">
                                            <img
                                                className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                                src="https://static.todamateria.com.br/upload/st/al/stalin1952bb.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="px-4 py-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="font-bold text-black sm:text-3xl text-xl mb-2">
                                                    WELLISSON É STALIN?
                                                </h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ad recusandae, consequatur corrupti vel quisquam id itaque
                                                    nam
                                                </p>
                                                <p className="font-medium text-sm text-indigo-600 mt-2">
                                                    Read more<span className="text-indigo-600">&hellip;</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray"
                                >
                                    <a href="#" className="space-y-4">
                                        <div className="aspect-w-16 aspect-h-9">
                                            <img
                                                className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                                src="/img/nycolas.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="px-4 py-2">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className="font-bold text-black sm:text-3xl text-xl mb-2">
                                                    TECNYC NA INVASÃO DO PLANALTO?
                                                </h3>
                                            </div>
                                            <div className="text-lg">
                                                <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Ad recusandae, consequatur corrupti vel quisquam id itaque
                                                    nam
                                                </p>
                                                <p className="font-medium text-sm text-indigo-600 mt-2">
                                                    Read more<span className="text-indigo-600">&hellip;</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}