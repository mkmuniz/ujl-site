import { CarouselProvider, ButtonBack, Slider, Slide, ButtonNext } from "pure-react-carousel"

const CarouselMobile = () => {
    return <>
    {/* Carousel for mobile and Small size Devices */}
    <CarouselProvider className="sm:block hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true} naturalSlideHeight={0}>
                    <div className="sm:w-full lg:w-5/6 relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://images.theconversation.com/files/495169/original/file-20221114-11-893u9j.jpg?ixlib=rb-1.1.0&rect=18%2C54%2C6020%2C3956&q=45&auto=format&w=926&fit=clip" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <div className="flex h-full items-end pb-6">
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider></>
};

export default CarouselMobile;