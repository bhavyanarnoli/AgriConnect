import React from 'react'
import { useState, ReactDOM } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';
import styles from "./carousel.module.scss";
const CARDS = 3;
const MAX_VISIBILITY = 3;

export default function CarouselWrapper({ language }) {
    const infoText = language === "English" ? "Real-Market Information" : "वास्तविक बाजार सूचना";
    const infosubtext1 = language === "English" ? "Information from credible sources," : "विश्वसनीय स्रोतों से जानकारी";
    const infosubtext2 = language === "English" ? "rated from real customers who used this site" : "जो वास्तविक ग्राहकों द्वारा इस साइट का उपयोग कर रहे हैं, की गई रेटिंग।";
    const tomato = language === "English" ? "The price of tomatoes is high today due to the adverse weather conditions, which have led to a shortage in the supply of tomatoes" : "टमाटर की कीमत आज उच्च है क्योंकि विपरीत मौसम की स्थितियाँ हैं, जो टमाटर के आपूर्ति में कमी को लाया है।";
    const wheat = language === "English" ? "The price of wheat is stable today because of favourable wather conditions for the growth of wheat." : "गेहूं का मूल्य आज स्थिर है क्योंकि गेहूं के विकास के लिए सुखद मौसम की स्थिति है।";
    const carrot = language === "English" ? "The price of carrot is also stable today because of favourable weather conditions for the growth of carrot." : "गाजर की कीमत आज भी स्थिर है क्योंकि गाजर के विकास के लिए मौसम की सुनहरी स्थितियों के कारण।";

    return (
        <div className={styles.app}>
            <div className='flex flex-col justify-start'>
                <div className='text-5xl py-8'>{infoText}</div>
                <div className='text-2xl py-8'>{infosubtext1}<br /> {infosubtext2}</div>
                <button className='text-left w-max p-2 border-2 rounded-3xl underline my-4' onClick={() => window.location.href = "https://agmarknet.gov.in/"}>
                    {language === "English" ? "Check out more reviews" : "अधिक समीक्षाएँ देखें"}
                </button>

            </div>
            <Carousel>
                    <Card price={80} noOfstars={2} title={language =="English" ?'Tomato' : "टमाटर"} content={tomato}/>
                    <Card price={40} noOfstars={4} title={language =="English" ?'Wheat' : "गेहूँ"} content={wheat}/>
                    <Card price={100} noOfstars={5} title={language =="English" ?'Carrot' : "गाजर"} content={carrot}/>
            </Carousel>
        </div>
    )
}

const stars = (noOfstars)=>{
    let arr_starts =[]
    for (let index = 0; index < noOfstars; index++) {
                arr_starts.push(<img className='object-contain' src="https://img.icons8.com/fluency/48/null/star.png" />)
        
    }
    return arr_starts;
}
const Card = ({ title, content, price, noOfstars }) => (
    <div className={styles.card} >
        <div className=' '>
            <div className=''>
                <p className='text-3xl text-[#212936] text-right font-extrabold'>₹{price}/kg</p>
                <h2 style={{"textAlign":"left"}} >{title}</h2>
            </div>
            <div className='flex'>
                {
                 stars(noOfstars)   
                }
            </div>
        </div>
        <p className='py-4'>{content}</p>
    </div>
);

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className={styles.carousel}>
            {active > 0 && <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
            {React.Children.map(children, (child, i) => (
                <div className={styles.cardContainer} style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 && <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
        </div>
    );
};
