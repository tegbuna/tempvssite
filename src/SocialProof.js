import React, { useState, useEffect } from "react";
import  './SocialProof.css';


const SocialProof = ({ url }) => {
  const [count, setCount] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCount(data.count);
        setReviews(data.reviews);
      });
  }, []);

  return (
    <div>
      <h1>Social Proof</h1>
      <p>This product has been reviewed {count} times.</p>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};


export default SocialProof
