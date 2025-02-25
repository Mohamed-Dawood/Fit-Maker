import Accordion from '../Components/Accordion';

function Questions() {
  return (
    <div className="questions">
      <div className="container">
        <div className="section-header">
          <h2>
            frequently asked <span>question</span>
          </h2>
        </div>
        <Accordion />
      </div>
    </div>
  );
}

export default Questions;
