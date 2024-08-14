import React from 'react';

const StarRating = ({ rating, NoOfReview }) => {
  // Calculate full stars and half star
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  console.log('hasHalfStar : ', hasHalfStar);

  return (
    <div className="hidden lg:flex flex-col items-end">
      <div className="text-lg lg:text-3xl text-white font-bold">
        {[...Array(5)].map((_, starIndex) => {
          let starClass = 'text-white text-sm lg:text-4xl'; // Base star class
          if (starIndex < fullStars) {
            // Full star
            starClass += ' text-tertiary'; // Change color for full stars
          } else if (hasHalfStar && starIndex === fullStars) {
            // Half star
            starClass += ' text-seconday'; // Change color for half star
          } else {
            // Empty star
            starClass += ' text-black'; // Change color for empty stars
          }

          return (
            <span key={starIndex} className={starClass}>&#9733;</span>
          );
        })}
      </div>
      <p className="text-sm lg:text-xl text-tertiary font-bold">{NoOfReview} Reviews</p>
    </div>
  );
};

export default StarRating;
