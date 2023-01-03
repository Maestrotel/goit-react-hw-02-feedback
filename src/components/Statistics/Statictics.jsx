import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsArea}>
        Good:<span className={css.statisticsNumber}> {good}</span>
      </li>
      <li className={css.statisticsArea}>
        Neutral:<span className={css.statisticsNumber}> {neutral}</span>
      </li>
      <li className={css.statisticsArea}>
        Bad:<span className={css.statisticsNumber}> {bad}</span>
      </li>
      <li>
        <span className={css.statisticsTotal}>Total:</span>
        <span className={css.statisticsNumber}> {total}</span>
      </li>
      <li>
        <span className={css.statisticsFeed}>Positive feedback:</span>
        <span className={css.statisticsNumber}>
          {' '}
          {Math.round(positivePercentage)} %
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
