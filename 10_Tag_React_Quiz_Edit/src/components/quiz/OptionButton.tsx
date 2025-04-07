type OptionButtonProps = {
    option: string;
    isCorrect: boolean;
    isSelected: boolean;
    index: number;
    // isRevealed: boolean;
    handleAnswerClick: (selectedAnswer: string) => void;
};

export default function OptionButton({
    option,
    isCorrect,
    handleAnswerClick,
    isSelected, index
}: OptionButtonProps) {

    // let buttonClass = "big-button "
    // if(...)

    return (
        <button
            className={
                "big-button " +
                (isCorrect ? "big-button--correctoption " : "") +
                (isSelected&&isCorrect ? "big-button--selectedcorrect" : "") +
                (isSelected&&!isCorrect ? "big-button--selectedincorrect" : "")
            }
            key={option}
            onClick={() => handleAnswerClick(option)}
        >
            <span className="big-button__logo">
          {["A", "B", "C", "D", "E", "F"][index]}
        </span>
            <span className="big-button__text">{option}</span>
        </button>
    );
}
