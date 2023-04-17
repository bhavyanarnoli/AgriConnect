import {React} from 'react'
import Leaf from '../assets/Leaf.png';
import cup from '../assets/cup.png';
import Cards from './Cards.jsx';

function Market_Info() {
  // <div>Market_Info</div>
  return (

      <section className={`relative w-full h-screen mx-auto`}>
  
        <div className="flex items-center justify-center h-screen">
  
          {/* <div className="bg-[#395C4D] p-4 rounded-3xl w-3/5 h-3/5 xs:h-1/4 sm:h-1/3 md:h-96 lg:h-1/2 xl:h-3/5 "> */}
          
            <div className='flex flex-wrap gap-20 items-center justify-between'>
              <div>
  
                <div className='text-5xl font-light text-center'>Add Information about your Co-Farmers</div>
  
                <br></br>
                <br></br>
                <div className='text-2xl font-thin text-center'>Tell us about your co-farmers and their farming practices. Share your</div>
                <div>
                  <img className='absolute left-0 bottom-0' src={Leaf} alt='Leaf' style={{width: '500px', height: 'auto'}} />
                </div>
                <div>
                  <img className='absolute right-0 bottom-0' src={cup} alt='cup' style={{width: '350px', height: 'auto'}} />
                </div>
                <div className='text-2xl font-thin text-center'>experience with their products and the quality you have recieved</div>
                <div className='flex justify-center mt-10'>
                <button className='bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full'>
                  Enter
                </button>

                </div>

              </div>

            </div>
  
  
        </div>
      <Cards/>
      </section>
    )
}

export default Market_Info