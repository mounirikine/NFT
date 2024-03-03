import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Test from "../assets/test.png";
import Test1 from "../assets/test2.png";
import Test2 from "../assets/test3.png";
import bg from "../assets/bg.png";
import {motion} from 'framer-motion'
const Nfts = () => {
  return (
    <>
      <section className="min-h-screen">
        <main className="lg:px-10 xl:px-20 py-10">
          <motion.div className="py-5 md:py-10 w-full px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-5 md:mb-0">
              <h1 className="text-xl md:text-3xl mb-1">Discover More NFTs</h1>
              <p className="text-gray-400">Explore New Trending NFTs</p>
            </div>
          </motion.div>

          <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.25}}
          
          className="px-5 sm:px-10 md:px-10 flex flex-col lg:flex-row items-center justify-center  gap-5 w-full ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-md mb-5">
                <img src={index === 0 ? Test : index === 1 ? Test1 : Test2} alt={`NFT ${index}`} className="w-full" />
                <div className="bg-gray-900 py-2 px-2">
                  <h1>Distant Galaxy</h1>
                  <span className="flex items-center text-xs text-gray-400 py-1">MoonDancer</span>
                  <div className="flex items-center justify-between pr-3">
                    <span>
                      <h3 className="text-xs text-gray-500">Highest Bid</h3>
                      <h3>0.33 WTH</h3>
                    </span>
                    <span>
                      <h3 className="text-xs text-gray-500">Price</h3>
                      <h3>1.63 ETH</h3>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="py-5 md:py-10 flex items-center justify-center px-6">
            <Link
              to="#"
              className="px-5 md:px-10 py-3 rounded-md hover:border-none border-violet-600 border-2 hover:bg-violet-600 flex items-center gap-1 justify-center w-full md:w-4/12"
            >
              <FaEye /> See All
            </Link>
          </div>

          <hr className="w-11/12 mx-auto mb-5" />

          <div className="py-3 flex items-center justify-center">
            <img src={bg} className="object-cover w-full h-full" alt="" />
          </div>
          <hr className="w-11/12 mx-auto mb-5 mt-5" />
        </main>
      </section>
    </>
  );
};

export default Nfts;
