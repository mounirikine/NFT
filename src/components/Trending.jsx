import { Link } from "react-router-dom";
import NFT from "../../src/assets/dog.png";
import { IoRocketOutline } from "react-icons/io5";

const Trending = () => {
  return (
    <>
      <section className="min-h-screen">
        <main className="py-5 md:py-10 px-5 sm:px-10">
          <div className="py-5 md:py-10 w-full px-5 sm:px-10">
            <h1 className="text-2xl md:text-3xl mb-1">Trending Collection</h1>
            <p className="text-gray-400">Checkout Our Weekly Updated Trending Collection</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 py-5 md:py-10">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="mb-5 md:mb-0 md:mr-5">
                <div>
                  <img src={NFT} className="w-full md:w-[270px]" alt="" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>
                    <img src={NFT} className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <img src={NFT} className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <div className="flex items-center justify-center w-12 md:w-20 bg-violet-500 h-12 md:h-20 rounded-md">+999</div>
                  </span>
                </div>
                <div>
                  <h1 className="py-1 text-base md:text-lg">NFT Animals</h1>
                  <div className="flex items-center gap-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" className="w-4 h-4 md:w-6 h-6" />
                    <p className="text-xs md:text-sm text-gray-400">Mounir</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-5 md:py-10 flex items-center justify-center">
            <Link
              to="#"
              className="px-5 md:px-10 py-3 rounded-md  hover:border-none border-violet-600 border-2 hover:bg-violet-600 flex items-center gap-1 justify-center w-full md:w-4/12"
            >
              <IoRocketOutline /> Discover More
            </Link>
          </div>
          <hr />
        </main>

        
      </section>
    </>
  );
};

export default Trending;
