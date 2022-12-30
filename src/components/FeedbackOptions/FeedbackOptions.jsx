export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
