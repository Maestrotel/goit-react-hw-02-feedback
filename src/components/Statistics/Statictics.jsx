import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li>
        Good:<span className={css.statisticsNumber}> {good}</span>
      </li>
      <li>
        Neutral:<span className={css.statisticsNumber}> {neutral}</span>
      </li>
      <li>
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
