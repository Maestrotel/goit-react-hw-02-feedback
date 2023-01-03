import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(option => (
        <li key={option} className={css.buttonI}>
          <button
            onClick={onLeaveFeedback}
            name={option}
            className={css.buttonItem}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
