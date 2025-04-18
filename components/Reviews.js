import { useState, useEffect } from "react";

const reviewsData = [
  { name: "Ola", text: "Awesome meal ideas! Added this page to my favourites :)" },
  { name: "Antonija", text: "I have 3 boys (including my husband LOL) that are picky eaters and they can all agree on the recipes I get from GetCooked." },
  { name: "Amrita", text: "Delicious meals. 5 stars" },
  { name: "Niklaus", text: "I eat a strict diet because of my workout regime and the meals can get boring. With GetCooked, I always spice it up and still meet my needs." },
  { name: "Liam", text: "I had a question and staff got back to me quick with a professional response. Great team!" },
  { name: "Don", text: "Great for inspiration" },
  { name: "Abdiou", text: "YUM! Awesome food!" },
  { name: "Krista", text: "Whenever I have guests I come ot GetCooked for meal inspo. Always get rave reviews." },
  { name: "Zahra", text: "This site is a lifesaver on busy evenings." },
  { name: "Niamh", text: "Great food and an appealing website. Two thumbs up!!!!!" },
  { name: "Stan", text: "I love this site! :) :) :)" },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Reviews = () => {
  const [shuffledReviews, setShuffledReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setShuffledReviews(shuffleArray(reviewsData));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledReviews.length);
  };

  if (shuffledReviews.length === 0) return <div>Loading...</div>;

  const review = shuffledReviews[currentIndex];

  return (
    <div className="review-wrapper">
      <div className="review-card">
        <p>"{review.text}"</p>
        <p>- {review.name}</p>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next Review
      </button>
    </div>
  );
}
export default Reviews;