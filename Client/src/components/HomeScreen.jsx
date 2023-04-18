import { useState } from 'react';

const HomeScreen = ({language}) => {
  const[weather,setweather] = useState();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "897f014554msh60164b147e07c69p14eb32jsna8d64672e82a",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const  handleSubmit = async (event) =>{
    event.preventDefault();
    const {weather} = event.target;
    const w = weather.value;
    
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${w}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setweather(data.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const temp = language === "English" ? "Temperature" : "तापमान";
  const area = language === "English" ? "in your area" : "आपके क्षेत्र में";
   return (

    <section className={`relative w-full h-screen mx-auto`}>

      <div className="flex items-center justify-center h-screen">

        <div className="bg-[#86a541] p-4 rounded-3xl w-3/5 h-3/5 xs:h-1/4 sm:h-1/3 md:h-96 lg:h-1/2 xl:h-3/5 ">

          <div className='flex h-full items-center justify-between'>

            <div className='text-[54px] -translate-x-1/4'>

              <div className='font-semibold'>{temp}</div>
              <div className='font-semibold'>{area}</div>
              {/* <div className='text-2xl font-light uppercase leading-[39px] tracking-[0.1rem]'>{!weather ? `Sunny` : `${weatherMessage}`}</div> */}
              <form onSubmit={handleSubmit} className='flex items-center py-4' >
                <input name='weather' className='bg-transparent border-solid border-white border-2  rounded-md p-4 text-base text-white focus:outline-none' type="text" placeholder='' />
              </form>

            </div>
            <div className='text-10xl scale-150 font-medium translate-x-1/4'>{ !weather ? `30°C` : `${weather}°C`}</div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default HomeScreen