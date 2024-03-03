import { Link } from "react-router-dom";
import NFT from "../../src/assets/dog.png";
import { IoRocketOutline } from "react-icons/io5";

import {motion} from 'framer-motion'
const Trending = () => {
  return (
    <>
      <section className="min-h-screen">
        <main className="py-5 md:py-10 px-5 sm:px-10">
          <motion.div  variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.25}}
             className="py-5 md:py-10 w-full px-5 sm:px-10">
            <h1 className="text-2xl md:text-3xl mb-1">Trending Collection</h1>
            <p className="text-gray-400">Checkout Our Weekly Updated Trending Collection</p>
          </motion.div>

          <motion.div 
           variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.25}}
          className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 py-5 md:py-10">
          <div  className="mb-5 md:mb-0 md:mr-5">
                <div>
                  <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=sph" className="w-[270px]" alt="" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>
                    <img src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=sph' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <img src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622046.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=sph' className="w-12 md:w-20" alt="" />
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
          <div  className="mb-5 md:mb-0 md:mr-5">
                <div>
                  <img src="https://i.pinimg.com/236x/84/fe/bb/84febb83ab4ed56e146c8cdff57b0b3e.jpg" className="w-[270px]" alt="" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>
                    <img src='https://i.pinimg.com/236x/e3/0a/22/e30a223b846a736bdcc0d46fc6277cf5.jpg' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <img src='https://i.pinimg.com/236x/1b/c9/84/1bc984eb70c63ec81eb11ae8d6b47ea9.jpg' className="w-12 md:w-20" alt="" />
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
          <div  className="mb-5 md:mb-0 md:mr-5">
                <div>
                  <img src="https://i.pinimg.com/236x/0d/82/4d/0d824d4a2119fbaa7ebc2f574c98e9bb.jpg" className="w-[270px]" alt="" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>
                    <img src='https://i.pinimg.com/236x/e5/1b/96/e51b96a6fc1cfc3075e0280f20faae21.jpg' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <img src='https://i.pinimg.com/236x/e2/4d/c0/e24dc081c68979e2ed3ca2578f0eb521.jpg' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <div className="flex items-center justify-center w-12 md:w-20 bg-violet-500 h-12 md:h-20 rounded-md">+999</div>
                  </span>
                </div>
                <div>
                  <h1 className="py-1 text-base md:text-lg">NFT Animals</h1>
                  <div className="flex items-center gap-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" className="w-4 h-4 md:w-6 " />
                    <p className="text-xs md:text-sm text-gray-400">Mounir</p>
                  </div>
                </div>
              </div>
          <div  className="mb-5 md:mb-0 md:mr-5">
                <div>
                  <img src="https://i.pinimg.com/236x/db/5a/36/db5a36938eb1194781548f22844fa046.jpg" className="w-[279px]" alt="" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>
                    <img src='https://i.pinimg.com/236x/d9/64/04/d964049478cde9c836ac493cddd746fa.jpg' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <img src='https://i.pinimg.com/236x/51/81/80/518180b1d21ee273c8a592211913db5e.jpg' className="w-12 md:w-20" alt="" />
                  </span>
                  <span>
                    <div className="flex items-center justify-center w-12 md:w-20 bg-violet-500 h-12 md:h-20 rounded-md">+999</div>
                  </span>
                </div>
                <div>
                  <h1 className="py-1 text-base md:text-lg">NFT Animals</h1>
                  <div className="flex items-center gap-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" className="w-4  md:w-6 h-6" />
                    <p className="text-xs md:text-sm text-gray-400">Mounir</p>
                  </div>
                </div>
              </div>
          </motion.div>
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
