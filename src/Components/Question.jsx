
import Option from "./Option";

function Question({question, options, onOptionChange, index}) {
    return (
        <div id={index}>
            <p>{question.id + 1}. {question.question}</p>
            <Option 
                questionId = {question.id}
                options = {options}
                selectedIndex = {index}
                onOptionChange = {onOptionChange}
                points = {question.points}
            />
        </div>
    );
}

export default Question;