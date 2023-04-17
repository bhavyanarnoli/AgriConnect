import React from 'react';
import Leaf from '../assets/Leaf.png';
import cup from '../assets/cup.png';
import Cards from './Cards.jsx';
import { useState } from 'react';
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
              <button className="bg-green-500 hover:bg-green-600 text-white py-4 px-10 rounded-full">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-evenly" style={{ "background": "transparent" }}>
        {
          reviews.map((review) => {
            return (
              <Cards
                key={review.id}
                color={review.color}
                author={review.author}
                content={review.content}
                img={review.img}
                numberOfstars={review.numberOfstars}
                otherAuthor={review.otherAuthor}
              />
            )
          })
        }
      </div> */}
      <Cards />

    </section>
  );
}

export default Market_Info;
