import { FaEnvelope } from 'react-icons/fa';
import Photo from '../assets/Photo.png';

const Email = () => {
  return (
    <>
      <section className='mb-10 px-5 sm:px-10 lg:px-20'>
        <main className='flex flex-col md:flex-row items-center rounded-xl w-full md:w-11/12 mx-auto py-10 justify-center gap-5 bg-slate-900'>
          <div className="w-full md:w-6/12 flex items-center justify-center">
            <img src={Photo} alt="Photo" />
          </div>
          <div className="w-full md:w-6/12">
            <h1 className='py-4 text-4xl md:w-8/12 lg:w-5/12'>Join Our Weekly Digest</h1>
            <p className='pb-4 text-gray-400'>Get Exclusive Promotions & Updates Starting To Your Inbox.</p>

            <div className="flex flex-col md:flex-row items-center bg-white w-full md:w-8/12 rounded-xl">
              <input type="text" className='w-full md:w-6/12 px-3 text-black outline-none py-2 mx-2 mb-2 md:mb-0' placeholder='Enter your email here' />
              <button className='bg-violet-600 w-full md:w-6/12 rounded-xl py-3 flex items-center justify-center gap-2'>
                <FaEnvelope /> Subscribe
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Email;
