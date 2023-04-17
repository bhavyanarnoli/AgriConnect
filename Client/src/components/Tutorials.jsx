import React from 'react'
import Loamy from '../assets/Loamy.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState, useEffect } from 'react'

function Tutorials({ language }) {
  console.log(language);
  const [weather, setWeather] = useState(null)
  const [prev, setprev] = useState(1)
  const [next, setnext] = useState(1)
  const [data, setData] = useState([]);

  useEffect(() => {
    // alert("Language changed to " + language);
    if (language === "English") {
      setData([
        {
          id: 1,
          header: "Loamy Soil",
          text: "Loamy soil is ideal for growing several crops such as wheat, sugarcane, cotton, pulses, and oilseeds.",
          sub: "Water everyday so that the roots appear wet all the time.",
          temp: "loda",
          fert: "loda",
          pest: "loda",
          tech: "loda",
          img: Loamy,
        },
        {
          id: 2,
          header: "Clay Soul",
          text: "Clay soil is ideal for growing several crops such as wheat, sugarcane, cotton, pulses, and oilseeds.",
          sub: "Water everyday so that the roots appear wet all the time.",
          temp: "loda",
          fert: "loda",
          pest: "loda",
          tech: "loda",
          img: Loamy
        },
        {
          id: 3,
          header: "Sandy Soul",
          text: "Sandy soil is ideal for growing several crops such as wheat, sugarcane, cotton, pulses, and oilseeds.",
          sub: "Water everyday so that the roots appear wet all the time.",
          temp: "loda",
          fert: "loda",
          pest: "loda",
          tech: "loda",
          img: Loamy
        },
        {
          id: 4,
          header: "Silt Soul",
          text: "Silt soil is ideal for growing several crops such as wheat, sugarcane, cotton, pulses, and oilseeds.",
          sub: "Water everyday so that the roots appear wet all the time.",
          temp: "loda",
          fert: "loda",
          pest: "loda",
          tech: "loda",
          img: Loamy
        }
      ]);
    } else if (language === "अंग्रेज़ी") {
      setData([
        {
          id: 1,
          header: "दोमट मिटटी",
          text: "दोमट मिटटी गेहूं, गन्ना, कपास, दालें और तेलसीधे जैसी कई फसलों के लिए आदर्श होती है।",
          sub: "हर दिन पानी दीजिए ताकि जड़ें हमेशा गीली नजर आएं।",
          temp: "loda",
          fert: "loda",
          pest: "loda",
          tech: "loda",
          img: Loamy,
        },
      ]);
    }
  }, [language, data]);

  return (
    <div
      className='h-screen w-full items-center justify-center flex px-5'
    >
      <a href={`#${prev}`} className="" onClick={
        () => {
          if (prev > 1) {
            setprev(prev - 1)
          }
          else {
            setprev(data.length)
          }
        }
      }>
        <AiOutlineLeft className='text-5xl' href='#1' />
      </a>
      <div className='carousel w-full'>
        {
          data.map((item) => {
            return (
              <TutorialCard
                id={item.id}
                header={item.header}
                text={item.text}
                sub={item.sub}
                temp={item.temp}
                fert={item.fert}
                pest={item.pest}
                tech={item.tech}
                img={item.img}
              />
            )
          })
        }
      </div>
      <a href={`#${next}`} className="" onClick={
        () => {
          if (next < data.length) {
            setnext(next + 1)
          }
          else {
            setnext(1)
          }
        }
      }>
        <AiOutlineRight className='text-5xl' href='#2' />
      </a>
    </div>
  )
}

export default Tutorials

function TutorialCard({ id, header, text, sub, temp, fert, pest, tech, img }) {
  return (
    <div id={id} className='flex carousel-item relative  w-full items-center justify-center h-3/4'>
      <div className="p-10 w-1/3 ">
        <img src={img} className="object-fill brightness-50 hover:animate-brightness-50-to-100" />
      </div>
      <div className="flex flex-col h-full font-light w-1/4 pr-10">
        <div className="p-4">
          <p className="text-3xl">Suggestions</p>
        </div>
        <div className="p-4 flex flex-col gap-4 text-lg">
          <p className="text-5xl font-normal">{header}</p>
          <p>{text}</p>
          <p>{sub}</p>
          <div>
            <p>Temperature Need</p>
            <div className='w-2/3 border-b'>{temp}</div>
          </div>
          <div>
            <p>Fertilisers</p>
            <div className='w-2/3 border-b'>{fert}</div>
          </div>
          <div>
            <p>Pesticides</p>
            <div className='w-2/3 border-b'>{pest}</div>
          </div>
          <div>
            <p>Technologies</p>
            <div className='w-2/3 border-b'>{tech}</div>
          </div>
          <div className='w-2/3 p-3 mt-5 text-center border-2 rounded-xl'>
            <p>View Tutorial</p>
          </div>
        </div>
      </div>
    </div>
  )
}