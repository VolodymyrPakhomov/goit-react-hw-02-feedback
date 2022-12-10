import '../FeedbackOptions/FeedbackOptions.styled.css';

export const FeedbackOptions = ({ onIncrement }) => {
  return  (
    <>
      <div className="Controls">
        <button type="button" onClick={onIncrement}>
          Good
        </button>
        <button type="button" onClick={onIncrement}>
          Neutral
        </button>
        <button type="button" onClick={onIncrement}>
          Bad
        </button>
      </div>
    </>
  );
};
