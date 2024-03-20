import './Banner.css'
const Banner = () => {
    return (
        <div className='my-7 space-y-5'>
            <div className="container mx-auto banner-bg bg-repeat-round rounded-2xl h-[600px] flex flex-col justify-center lg:p-0 p-4">
                {/* <div className='flex flex-col items-center text-center justify-center space-y-8 w-full h-full' >
                <h1 className='font-lexend font-bold lg:text-5xl text-3xl text-black lg:w-2/3 shadow-2xl'>
                Exploring the Binary Excellence: Where Zeros and Ones Blueprint the Universe. 
                </h1>
                <div className="flex  lg:gap-8 gap-4">
                    <button className="btn rounded-full bg-green-400 font-lexend font-semibold text-xl">
                        Explore Now
                    </button>
                    <button className="btn rounded-full bg-transparent font-lexend font-semibold text-xl text-white">
                        Our Feedback
                    </button>
                </div>*/}
            </div>



            <div>
                <h1 className='font-lexend font-bold lg:text-5xl text-3xl text-black'>
                    Exploring the Binary Excellence: Where Zeros and Ones Blueprint the Universe.
                </h1>
            </div>
            <hr className='border-blue-800 mt-5 border-2' />

        </div>
    );
};

export default Banner;


{/* <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400'>Dine Dynasty!</span> */ }