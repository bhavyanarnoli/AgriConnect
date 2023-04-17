import React from 'react';
import farmer1 from "../assets/farmer1.png"
const Card = ({ color, author, content, img, numberOfstars, otherAuthor }) => {
    const stars = (numberOfstars) => {
        let arr = []
        for (let index = 0; index < numberOfstars; index++) {
            arr.push(<img className='invert' src="https://img.icons8.com/ios-filled/50/null/star--v1.png"/>)
        }
        return arr;
    }
    return (
        <div className='flex w-[800px] h-[500px] mx-8'>
            <div className={`bg-[#${color}] w-1/2 p-8 flex flex-col justify-between`}>
                <div>
                    <div>
                        " {content} "
                    </div>
                    <div>-{author}</div>
                </div>
                <div className='flex scale-50'>{stars(numberOfstars)}</div>
            </div>
            <div className='bg-white relative w-1/2' >
                <div className='bg-white h-full flex items-center flex-col justify-center'>
                    <img className='max-w-[200px]' src={farmer1} />
                </div>
                <div className='absolute translate-x-5 -translate-y-full text-black'>{otherAuthor}</div>
            </div>

        </div>
    )
}
function Cards() {
    return (
        <div className="flex justify-evenly" style={{"background":"linear-gradient(77.81deg, #256A25 21.93%, #4F912C 77.64%)"}}>
            <Card color={`598216`} img={farmer1} numberOfstars={5} otherAuthor={`Rama`} author={`Marilee L.`} content={`Beautiful color, nice surface, environmentally responsible material and packaging. Very happy about this purchase.`} />
            <Card color={`598216`} img={farmer1} numberOfstars={5} otherAuthor={`Sara Khan`} author={`Ric H.`} content={`Amazing qality and refined design.`} />
            <Card color={`598216`} img={farmer1} numberOfstars={5} otherAuthor={`Rama`} author={`Emma D.`} content={`A very hardworkingand keen Farmer. Work on left half of the farm.`} />
        </div>
    );
}

export default Cards;
