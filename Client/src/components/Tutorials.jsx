import React from 'react'
import Loamy from '../assets/Loamy.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState, useEffect } from 'react'

function Tutorials() {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data)
      console.log(data)
    })
  }, [])

  return (
    <div
      className=' h-screen w-full items-center justify-center flex px-5'
    >
      <AiOutlineLeft className='text-5xl' />
      <TutorialCard
        weather={weather}
      />
      <AiOutlineRight className='text-5xl' />
    </div>
  )
}

export default Tutorials


async function getWeather() {
  const response = await fetch(
    "https://api.weatherstack.com/current?access_key=c88e89f33061a898c5c4c93ec9659a38&query=New York"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function TutorialCard() {
  return (
    <div className='flex  w-full items-center justify-center h-3/4'>
      <div class="p-10 w-1/3 ">
        <img src={Loamy} class="object-fill" />
      </div>
      <div class="flex flex-col h-full font-light w-1/4 pr-10">
        <div class="p-4">
          <p class="text-3xl">Suggestions</p>
        </div>
        <div class="p-4 flex flex-col gap-5 text-lg">
          <p class="text-5xl font-normal">Loamy Soil</p>
          <p>Loamy soil is ideal for growing several crops such as wheat, sugarcane, cotton, pulses, and oilseeds.</p>
          <p>Water everyday so that the roots appear wet all the time.</p>
          <div className='w-2/3 border-t-2'></div>
          <p>Temperature Need</p>
          <div className='w-2/3 border-t-2'></div>
          <p>Fertilisers</p>
          <div className='w-2/3 border-t-2'></div>
          <p>Pesticides</p>
          <div className='w-2/3 border-t-2'></div>
          <p>Technologies</p>
          <div className='w-2/3 border-t-2'></div>
          <div className='w-2/3 p-3 text-center border-2 rounded-xl'>
            <p>View Tutorial</p>
          </div>
        </div>
      </div>
    </div>
  )
}