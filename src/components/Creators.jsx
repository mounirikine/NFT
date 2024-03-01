import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Creators = () => {
    const Creators = [
        { 
            id: 1,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'BlueWhale',
            total: 34.55
        },
        { 
            id: 2,
            img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator2',
            total: 20.12
        },
        { 
            id: 3,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator3',
            total: 15.75
        },
        // Add 9 more creators with similar structure
        { 
            id: 4,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator4',
            total: 42.30
        },
        { 
            id: 5,
            img: 'https://img.freepik.com/free-psd/3d-rendering-boy-avatar-emoji_23-2150603408.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator5',
            total: 18.90
        },
        { 
            id: 6,
            img: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator6',
            total: 25.50
        },
        { 
            id: 7,
            img: 'https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579870.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator7',
            total: 30.75
        },
        { 
            id: 8,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator8',
            total: 22.40
        },
        { 
            id: 9,
            img: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator9',
            total: 16.20
        },
        { 
            id: 10,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator10',
            total: 35.80
        },
        { 
            id: 11,
            img: 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611722.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator11',
            total: 28.60
        },
        { 
            id: 12,
            img: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&uid=R138084043&ga=GA1.1.1634089821.1701467307&semt=ais',
            name: 'Creator12',
            total: 19.45
        }
    ];
    
  return (
    <section className="min-h-screen">
      <main className="  lg:px-20 py-10">
      <div className="py-5 md:py-10 w-full px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between">
  <div className="mb-5 md:mb-0">
    <h1 className="text-xl md:text-3xl mb-1">Top Creators</h1>
    <p className="text-gray-400">
      Checkout Our Rated Creators On The NFT Marketplace
    </p>
  </div>

  <Link
    to="#"
    className="px-5 md:px-4 py-3 rounded-md w-full md:w-2/12 bg-violet-600 flex items-center gap-1 justify-center"
  >
    <IoRocketOutline /> View Rankings
  </Link>
</div>


        <div className="py-5 px-5 sm:px-10 md:px-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center gap-5">
  {Creators.map((item, index) => (
    <div key={index} className="rounded-xl bg-gray-900 p-2 relative flex flex-col items-center justify-center w-full h-[200px] sm:w-[250px]">
      <span className="absolute top-1 left-1 rounded-full bg-gray-950 flex items-center justify-center text-white px-2">
        {item.id}
      </span>
      <img src={item.img} className="w-20 sm:w-24 rounded-full mb-3" alt="" />
      <h1 className="text-center text-sm sm:text-base">{item.name}</h1>
      <p className=" ">
        <span className="text-xs sm:text-sm text-gray-300 flex items-center justify-center">Total Sales :</span> {item.total} ETH
      </p>
    </div>
  ))}
</div>
<div className="py-5 md:py-10 flex items-center justify-center px-6">
            <Link
              to="#"
              className="px-5 md:px-10 py-3 rounded-md  hover:border-none border-violet-600 border-2 hover:bg-violet-600 flex items-center gap-1 justify-center w-full md:w-4/12"
            >
              <IoRocketOutline /> View Rankings
            </Link>
            
          </div>
          <hr className="w-11/12 mx-auto" />

      </main>
    </section>
  );
};

export default Creators;
