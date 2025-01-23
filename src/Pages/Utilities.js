import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import utilitiesImage from '../images/utilities.jpg';
import './Utilities.css';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
function Utilities() {
  return (
    <div>
      <div className="utilities">
        <div className="section-header">
          <h2>
            our <span>utilities</span>
          </h2>
          <p>What we do ?</p>
        </div>
        <div className="container">
          <div className="image">
            <img src={utilitiesImage} alt="utilitiesImage" />
          </div>
          <div className="info">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Personalized Fitness Plans
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Strength Training Excellence
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Bodybuilding Program
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Cardiovascular Fitness Boost
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Weight Loss Journey
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Injury Rehabilitation Support
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckDouble} />
                Group Workout Sessions
              </li>
            </ul>
            <button>read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
