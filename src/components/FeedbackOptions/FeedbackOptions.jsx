import '../FeedbackOptions/FeedbackOptions.styled.css';

export const FeedbackOptions = ({ options, onIncrement }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <div className="Controls">
        <button name="good" value={good} type="button" onClick={onIncrement}>
          Good
        </button>
        <button
          name="neutral"
          value={neutral}
          type="button"
          onClick={onIncrement}
        >
          Neutral
        </button>
        <button name="bad" value={bad} type="button" onClick={onIncrement}>
          Bad
        </button>
      </div>
    </>
  );
};
