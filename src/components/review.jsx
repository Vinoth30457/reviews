import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const getRandomUser = () => {
    const randomIndex = Math.trunc(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
  const getPrev = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  };
  const getNext = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name.toUpperCase()}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={getPrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomUser}>
        Random User
      </button>
    </article>
  );
};

export default Review;
