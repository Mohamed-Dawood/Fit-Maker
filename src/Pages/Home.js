import Abdalah from '../images/Abdalah.png';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <h1>
            Achieve you <span>fitness goal</span> with fitMaker
          </h1>
          <p>
            "Join the Fitmaker community and transform your fitness journey. Our
            expert coaches and personalized programs are designed to help you
            achieve your goals and exceed your expectations. Ready to make a
            change?"
          </p>
          <div className="buttons">
            <button>Start Your journey</button>
            <button>Explore Programs</button>
          </div>
        </div>
        <div className="image">
          <img src={Abdalah} alt="Abdalah" />
        </div>
      </div>
    </div>
  );
}

export default Home;
