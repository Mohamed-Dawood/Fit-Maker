import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Statistics.css';

const statisticsData = [
  {
    start: 0,
    end: 96,
    suffix: '%',
    info: 'Client Satisfaction',
    description: 'Our members love their results and experience',
  },
  {
    start: 0,
    end: 5,
    prefix: '+',
    info: 'years of Experience',
    description: 'Trust in our proven track record of transforming',
  },
  {
    start: 0,
    end: 800,
    prefix: '+',
    info: 'Active Members',
    description: 'Join our thriving fitness community',
  },
  {
    start: 0,
    end: 24,
    suffix: '/7',
    info: 'Support Available',
    description: 'Expert assistance whenever you need it',
  },
];
function Statistics() {
  return (
    <div className="statistics">
      <div className="container">
        {statisticsData.map((statistic, index) => (
          <StatisticCard key={index} statistic={statistic} />
        ))}
      </div>
    </div>
  );
}

function StatisticCard({ statistic }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure the animation runs only once
    threshold: 0, // Trigger when 50% of the element is visible
  });

  return (
    <div className="statistic" ref={ref}>
      <div>
        {inView && (
          <CountUp
            start={statistic.start}
            end={statistic.end}
            suffix={statistic.suffix}
            prefix={statistic.prefix}
            duration={5}
          />
        )}
        <h3>{statistic.info}</h3>
      </div>
      <p>{statistic.description}</p>
    </div>
  );
}

export default Statistics;
