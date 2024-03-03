import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaMarsStrokeH } from "react-icons/fa";
import {motion} from 'framer-motion'
const Category = () => {
    const Creators = [
        { 
            id: 1,
            icon:<FaPaintBrush />,
            name: 'BlueWhale',
            
        },
        { 
            id: 2,
            icon:<FaMusic />,
            name: 'Music',
            
        },
        { 
            id: 3,
            icon:<FaCamera />,
            name: 'Photography',
            
        },
        { 
            id: 4,
            icon:<FaVideo />,
            name: 'Video',
            
        },
        { 
            id: 5,
            icon:<FaBasketballBall />,
            name: 'Sport',
            
        },
        { 
            id: 6,
            icon:<FaMarsStrokeH />,
            name: 'Virtual Worlds',
            
        },
       
    ];
    
  return (
    <section className="min-h-screen">
      <main className="  lg:px-20 py-10">
      <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.25}}
      
      
      className="py-5 md:py-10 w-full px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between">
  <div className="mb-5 md:mb-0">
    <h1 className="text-xl md:text-3xl mb-1">Browse Category</h1>
    <p className="text-gray-400">
      Checkout Our Categories
    </p>
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
        className="py-5 px-5 sm:px-10 md:px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 items-center gap-5">
  {Creators.map((item, index) => (
    <div key={index} className="rounded-xl bg-violet-600  relative flex flex-col items-center justify-center w-full h-[200px] sm:w-[200px]">
      
      <h1 className="text-center text-sm sm:text-5xl">{item.icon}</h1>
      <p className=" py-4 ">
            {item.name}
      </p>
    </div>
  ))}
</motion.div>
<div className="py-5 md:py-10 flex items-center justify-center px-6">
            <Link
              to="#"
              className="px-5 md:px-10 py-3 rounded-md  hover:border-none border-violet-600 border-2 hover:bg-violet-600 flex items-center gap-1 justify-center w-full md:w-4/12"
            >
              <IoRocketOutline /> Discover More
            </Link>
            
          </div>
          <hr className="w-11/12 mx-auto" />

      </main>
    </section>
  );
};

export default Category;
