import React from 'react';
import Leaf from '../assets/Leaf.png';
import cup from '../assets/cup.png';
import Cards from './Cards.jsx';
import { useState, useEffect } from 'react';
import farmer1 from '../assets/farmer1.png';
import farmer2 from '../assets/farmer2.png';
function Market_Info() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      img: farmer1,
      numberOfstars: 5,
      otherAuthor: "Rama",
      author: "Marilee L.",
      content: "Beautiful color, nice surface, environmentally responsible material and packaging. Very happy about this purchase."
    },
    {
      id: 2,
      img: farmer2,
      numberOfstars: 5,
      otherAuthor: "Sara Khan",
      author: "Ric H.",
      content: "Amazing qality and refined design."
    },
    {
      id: 3,
      img: farmer1,
      numberOfstars: 5,
      otherAuthor: "Mira Bai",
      author: "Emma D.",
      content: "A very hardworkingand keen Farmer. Work on left half of the farm."
    }
  ])


  const [reviewWindow, setReviewWindow] = useState(false);

  const [reviewName, setReviewName] = useState('');
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [reviewStars, setReviewStars] = useState(0);

  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    // Get the value of the selected radio button
    const newRating = parseInt(event.target.value);
    // Update the state with the new rating
    setRating(newRating);
  };

  useEffect(() => {
    console.log({ reviews });
  }, [reviews, setReviewWindow])

  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        background: "linear-gradient(77.81deg, #256A25 21.93%, #4F912C 77.64%)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "scroll",
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-wrap gap-20 items-center justify-between">
          <div>
            <div className="text-5xl font-light text-center">
              Add Information about your Co-Farmers
            </div>

            <br></br>
            <br></br>
            <div className="text-2xl font-thin text-center">
              Tell us about your co-farmers and their farming practices. Share
              your
            </div>
            <div>
              <img
                className="absolute left-0 bottom-0"
                src={Leaf}
                alt="Leaf"
                style={{ width: "500px", height: "auto" }}
              />
            </div>
            <div>
              <img
                className="absolute right-0 bottom-0"
                src={cup}
                alt="cup"
                style={{ width: "350px", height: "auto" }}
              />
            </div>
            <div className="text-2xl font-thin text-center">
              experience with their products and the quality you have recieved
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setReviewWindow(true);
                }}>
                Enter
              </button>
              <div className={`
                ${reviewWindow ? 'flex' : 'hidden'}
                p-5 gap-2 bg-[#7ea42a] flex flex-col absolute 
                w-1/2 h-1/2 border-2 rounded-xl border-black 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>

                <input className='rounded-xl p-5 bg-[#dcfc92] text-black' type='text' placeholder='Enter your name'
                  onChange={
                    (e) => {
                      setReviewName(e.target.value);
                    }
                  } />
                <input className='rounded-xl p-5 bg-[#dcfc92] text-black' type='text' placeholder='Enter your co-farmer s name'
                  onChange={
                    (e) => {
                      setReviewAuthor(e.target.value);
                    }
                  } />
                <input className='rounded-xl p-5 bg-[#dcfc92] text-black' type='text' placeholder='Enter your review'
                  onChange={
                    (e) => {
                      setReviewContent(e.target.value);
                    }
                  }
                />
                <div className="rating rating-lg self-center my-5">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" value={1} checked={rating==1} onChange={handleRatingChange}/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" value={2} checked={rating==2} onChange={handleRatingChange}/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" value={3} checked={rating==3} onChange={handleRatingChange}/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" value={4} checked={rating==4} onChange={handleRatingChange}/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange" value={5} checked={rating==5} onChange={handleRatingChange}/>
                </div>
                <button className='bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full'
                  onClick={
                    (e) => {
                      setReviews([{
                        id: reviews.length + 1,
                        img: farmer1,
                        numberOfstars: rating,
                        otherAuthor: reviewAuthor, author: reviewName,
                        content: reviewContent
                      }, ...reviews,])
                      // alert('Review Submitted');
                      setReviewWindow(false);
                    }
                  }
                >Submit</button>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly" style={{ "background": "transparent" }}>
        {reviews.map((review) => (
          <Cards
            key={review.id}
            img={review.img}
            numberOfstars={review.numberOfstars}
            otherAuthor={review.otherAuthor}
            author={review.author}
            content={review.content}
            color="598216"
          />
        ))}
      </div>
    </section>
  );
}



export default Market_Info;
