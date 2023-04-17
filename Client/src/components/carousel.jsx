import React from 'react'
import { useState, ReactDOM } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';
import styles from "./carousel.module.scss";
const CARDS = 3;
const MAX_VISIBILITY = 3;

export default function CarouselWrapper() {
    return (
        <div className={styles.app}>
            <div className='flex flex-col justify-start'>
                <div className='text-5xl py-8'>Real-Market Information</div>
                <div className='text-2xl py-8'>Information bought from credible sources, <br /> rated from real customers who used this site</div>
                <button className='text-left w-max p-2 rounded-3xl underline my-4'> Check out more reviews</button>
            </div>
            <Carousel>
                    <Card price={80} noOfstars={2} title={'Tomato'} content='
                    
                    The price of tomatoes is high today due to the adverse weather conditions, which have led to a shortage in the supply of tomatoes

                    
                    ' />
                    <Card price={40} noOfstars={4} title={'Wheat'} content='
                    
                    The price of wheat is stable today because of favourable wather conditions for the growth of wheat.

                    
                    ' />
                    <Card price={100} noOfstars={5} title={'Carrot'} content='
                    
                    The price of carrot is also stable today because of favourable weather conditions for the growth of carrot.

                    
                    ' />
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
