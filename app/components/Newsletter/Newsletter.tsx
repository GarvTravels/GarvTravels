import Image from "next/image";
import bgImage from "/public/assets/newsletter/bgFile.png";

const Newsletter = () => {
    return (
        <div className="sm:mx-auto max-w-2xl mx-2 md:max-w-7xl sm:rounded-3xl relative overflow-hidden">
            <Image src={bgImage} alt="Newsletter background" fill  className="rounded-3xl object-cover" />
            <div className="relative grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                <div className="col-span-12">
                    <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
                        <h3 className="text-4xl md:text-5xl text-center font-semibold text-white mb-3">Newsletter.</h3>
                        <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                            Subscribe to our newsletter for discounts, <br /> promo and many more.
                        </h3>

                        <div>
                            <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
                                <input type="email" name="q" className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Enter your email address" autoComplete="off" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                                    <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                        <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
