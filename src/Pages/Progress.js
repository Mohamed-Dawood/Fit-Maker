import FlipCard from '../Components/FlipCard';
import './Progress.css';
import frontImage1 from '../images/WhatsApp Image 2025-01-23 at 20.07.43_2b27d14b.jpg';
import backImage1 from '../images/utilities.jpg';
const cardData = [
  {
    frontImage: frontImage1,
    frontText: 'Front Text 1',
    backImage: backImage1,
    backText: 'Back Text 1',
  },
  {
    frontImage: 'https://via.placeholder.com/200x150?text=Front+2',
    frontText: 'Front Text 2',
    backImage: 'https://via.placeholder.com/200x150?text=Back+2',
    backText: 'Back Text 2',
  },
  {
    frontImage: 'https://via.placeholder.com/200x150?text=Front+3',
    frontText: 'Front Text 3',
    backImage: 'https://via.placeholder.com/200x150?text=Back+3',
    backText: 'Back Text 3',
  },
];
function Progress() {
  return (
    <div className="progress">
      <div className="container">
        <div className="section-header">
          <h2>
            our <span>progress</span>
          </h2>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <FlipCard
              key={index}
              frontImage={card.frontImage}
              frontText={card.frontText}
              backImage={card.backImage}
              backText={card.backText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;
