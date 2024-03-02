
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
const Work = () => {
  return (
    <>
      <section className="min-h-screen">
        <main className="  lg:px-20">
          <div className="py-3 md:py-5 w-full px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-5 md:mb-0">
              <h1 className="text-xl md:text-3xl mb-1">How It Works</h1>
              <p className="text-gray-400">Find Out How To Get Started</p>
            </div>
          </div>

          <div className="py-10 px-10">
            <main className="flex items-center justify-center gap-5">
                <div className="w-4/12 flex flex-col items-center justify-center p-4 rounded-lg bg-slate-900 h-[400px]">
                    <img src={icon1} alt="" className=' mb-2 w-44' />

                    <h1 className='py-1'>Setup Your Wallet</h1>
                    <p className='py-2 text-xs text-gray-400 text-center w-10/12'>Set up your Wallet of choice. <br />
                    Connect it to Animarket by clicking the Wallet icon in the top right corner
                    </p>
                </div>
                <div className="w-4/12 flex flex-col items-center justify-center p-4 rounded-lg bg-slate-900 h-[400px]">
                    <img src={icon2} alt="" className=' mb-2 w-44' />

                    <h1 className='py-1'>Create Collection </h1>
                    <p className='py-2 text-xs text-gray-400 text-center w-10/12'>
                    Upload your work and setup your collection. Add a description, social links and floor price.                    </p>
                </div>
                <div className="w-4/12 flex flex-col items-center justify-center p-4 rounded-lg bg-slate-900 h-[400px]">
                    <img src={icon3} alt="" className=' mb-2 w-44' />

                    <h1 className='py-1'>Start Earning</h1>
                    <p className='py-2 text-xs text-gray-400 text-center w-10/12'>
                    Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.                    </p>
                </div>
            </main>
          </div>


          <hr className="w-11/12 mx-auto mb-5" />

         
          
        </main>
      </section>
    </>
  );
};

export default Work;
