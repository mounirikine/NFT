import { FaEnvelope } from 'react-icons/fa'
import Photo from '../assets/Photo.png'

const Email = () => {
  return (
    <>

    <section className=' mb-10 px-10'>
        <main className='flex items-center rounded-xl w-11/12 mx-auto py-10 justify-center gap-5 bg-slate-900'> 
            <div className="w-6/12 flex items-center justify-center ">
                    <img src={Photo}  />
            </div>
            <div className="w-6/12 ">
                <h1 className='py-4 text-4xl w-5/12'>Join Our Weekly Digest</h1>
                <p className='pb-4 text-gray-400'>Get Exclusive Promotions & Updates Starting To Your Inbox.</p>

                <div className="flex items-center  bg-white w-8/12  rounded-xl">
                        <input type="text" className='w-6/12 px-3 text-black outline-none py-2 mx-2' placeholder='Enter your email here' />
                        <button className='bg-violet-600 w-6/12 rounded-xl  py-3 flex items-center justify-center gap-2'> <FaEnvelope /> Subscribe</button>
                </div>
            </div>
        </main>
    </section>
    
    
    </>
  )
}

export default Email