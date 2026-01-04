function Option({questionId, options, points, selectedIndex, onOptionChange}) {
    return (
        <div>
            {options.map((option, index) => (
                <div key={index} className='form-check'>
                    <input 
                        type="checkbox" // This is what makes the question multiple-choice
                        name="option"
                        value={option}
                        checked={selectedIndex == index}
                        data-optionnum={index}
                        data-questionid={questionId}
                        data-pointvalue={points[index]}
                        onChange={onOptionChange}
                        className='form-check-input'
                    />
                    <label className='form-check-label'>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Option;