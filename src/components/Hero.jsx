import { Link } from "react-router-dom";
import NFT from "../../src/assets/dog.png";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen px-5 md:px-10">
        <main className="py-5 md:py-10 px-5 md:px-14 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-5/12 pt-10 md:pt-0 md:pr-10">
            <h1 className="text-4xl md:text-6xl w-full md:w-10/12 mb-4 md:mb-7 font-bold">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-8">
              NFT Marketplace UI Created With Figma. Collect, Buy And Sell Art
              From More Than 20K NFT Artists
            </p>
            <Link
              to="#"
              className="px-5 md:px-10 py-3 rounded-md bg-violet-600 flex items-center gap-1 justify-center w-full md:w-4/12"
            >
              <IoRocketOutline /> Get Started
            </Link>

            <div className="flex flex-row md:flex-row items-center  justify-between py-5 md:py-10">
              <div className="mb-4 md:mb-0 w-4/12">
                <h1 className="text-xl md:text-3xl font-bold">240K+</h1>
                <p>Total Sale</p>
              </div>
              <div className="mb-4 md:mb-0 w-4/12">
                <h1 className="text-xl md:text-3xl font-bold">100K+</h1>
                <p>Auctions</p>
              </div >
              <div className="mb-4 md:mb-0 w-4/12">
                <h1 className="text-xl md:text-3xl font-bold">240K+</h1>
                <p>Artists</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex items-center justify-center">
            <img src={NFT} className="w-full md:w-[370px]" alt="" />
          </div>
        </main>
        <hr />
      </section>
    </>
  );
};

export default Hero;
