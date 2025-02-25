import { useState } from 'react';
import './FlipCard.css';
const FlipCard = ({ frontImage, backImage, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
