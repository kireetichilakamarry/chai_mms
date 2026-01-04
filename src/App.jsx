import { useState } from 'react'
import './App.css'
import { questionBank, pointThreshold, accuracyAssessment, contentTypeMap} from './Components/QuestionBank';
import Question from './Components/Question';

function App() {
  /* State Variables */
  const [selectedOptions, setSelectedOptions] = useState(
            Array(questionBank.length).fill('3')
          );
  const [score, setScore] = useState(0);
  const [isbelowThresh, setIsBelowThresh] = useState(true);
  const [contentType, setContentType] = useState('Other');
  
  /* Event Handling Helper Functions. */
  const optionChangeHandler = (e) => {
    const optionNum = e.target.dataset.optionnum;
    const questionid = e.target.dataset.questionid;
    const pointvalue = parseInt(e.target.dataset.pointvalue, 10); // Casting to base 10 int

    // Subtract Previous Option's Point Value
    const prevSelectedOptionIndex = parseInt(selectedOptions[questionid], 10);
    const prevOptionPointValue = questionBank[questionid].points[prevSelectedOptionIndex];
    if (prevOptionPointValue !== undefined) {
      setScore(prevScore => prevScore - prevOptionPointValue); 
    }

    // Updating Score with new point value and selectedOptions state grid
    selectedOptions[questionid] = optionNum;
    setSelectedOptions(prev => {
      const newOptions = [...prev];
      newOptions[questionid] = optionNum;
      return newOptions;
    });
    setScore(prevScore => prevScore + pointvalue);

    setIsBelowThresh(score < pointThreshold);
  }

  const contentTypeOptionChangeHandler = (e) => {
    const optionNum = e.target.dataset.optionnum;
    const questionid = e.target.dataset.questionid;

    // Updating Score with new point value and selectedOptions state grid
    setSelectedOptions(prev => {
      const newOptions = [...prev];
      newOptions[questionid] = optionNum;
      return newOptions;
    });

    // Update content type based on selection
    setContentType(contentTypeMap[optionNum]);

    /* Automatically re-renders, so we don't need to update the Content Intent & Accuracy question options manually */
  }

  return (
    <>
      <div>
        <h2 class="mainheader">Content Health Accuracy Index (CHAI) for Health-Related Social Media Content </h2>
      </div>
      <h2 class="headers"> About The Tool </h2>
      <div class="info-section">
        <p> Accuracy and quality of medical content on social media is of significant concern due to variability, accessibility, and lack of oversight. The CHAI is a tool that providers and researchers can use to appraise health related content on social media. </p>
      </div>
      <br />

      <h2 class="headers"> Why Use </h2>
      <div class="info-section">
        <p> Health information on social media is prevalent but highly variable in quality and oversight is limited. Although research on misinformation is growing, there is no widely adopted, objective tool to assess accuracy and quality, particularly for short-form videos. CHAI fills this gap by offering a structured, evidence-informed scoring approach that supports research, education, and public health efforts to curb misinformation. CHAI was initially developed to study Crohn’s disease–related content and has since been generalized to any medical topic and adapted for modern social media formats. Also can be used for vetting posts to share with patients, trainees, or the public (e.g., clinic resource lists, teaching sessions). </p>
      </div>
      <br />

      <h2 class="headers">Survey Questions </h2>
      <div class="info-section">
        <h3> Please answer the following questions. </h3>
        {questionBank.map((question) => (
          /* Passing in options based on the content type. */
          <Question 
            question = {question}
            options = {
              question.id === 3 
                ? (contentType === 'Lifestyle' 
                    ? question.lifestyleOptions 
                    : contentType === 'Medical Advice'
                      ? question.medicalAdviceOptions 
                      : question.otherOptions)
                : question.options
              }
            onOptionChange = {
              question.id == 0
              ? contentTypeOptionChangeHandler
              : optionChangeHandler
            }
            index = {selectedOptions[question.id]}
          />
        ))}
      </div>
      
      <br />

      {/* Total score and interpretation. */}
      <h2 class="headers">Total Score & Interpretation </h2>
      <div class="info-section">
        <div>
          {score == 1 ? (
            <h3>Total Score: {score} Point</h3>
          ): (
            <h3>Total Score: {score} Points</h3>
          )}
        </div>
        <div>
          <p>
            A score of 0 indicates that this is more likely to be a harmful and poor quality video, whereas a score of 10 indicates that this is likely to be a trustworthy and high quality video. Here is a more granular interpretation:
          </p>
          <ul>
            <li>
              <p>
                0-3 = Poor Overall Quality
              </p>
            </li>
            <li>
              <p>
                4-7 = Moderate Quality
              </p>
            </li>
            <li>
              <p>
                8-10 = High Quality
              </p>
            </li>
          </ul>
        </div>
      </div>

      <br />

      {/* Creator Insights */}
      <h2 class="headers">Evidence </h2>
      <div class="info-section">
        <p>
          Madabhushi, Sankirth MD*; Patel, Ami DO, MPH; Liu, Andrew MD; Tse-Kang, Samantha PhD; Rupawala, Abbas MD. S1852 Reel Talk: Evaluating the Informational Landscape of Crohn’s Disease Related Instagram Videos Through a Novel Scoring System. The American Journal of Gastroenterology 120(10S2):p S398, October 2025. | DOI: 10.14309/01.ajg.0001134868.05536.4b. 
          <a href="https://journals.lww.com/ajg/fulltext/2025/10002/s1852_reel_talk__evaluating_the_informational.1853.aspx ">https://journals.lww.com/ajg/fulltext/2025/10002/s1852_reel_talk__evaluating_the_informational.1853.aspx </a>
        </p>
      </div>

      <br />

      {/* Disclaimer Section */}
      <h2 class="headers">CHAI Score Disclaimer </h2>
      <div class="info-section">
        <p>
          The Content Health Accuracy Index (CHAI) is an educational tool for evaluating health-related social media content. Scores reflect the reviewer’s judgment based on information available at the time and may be subjective or incomplete. CHAI scores are not medical advice and should not be used as the sole basis for diagnosis, treatment, or clinical decision-making. For personal medical guidance, consult a qualified clinician.
        </p>
      </div>

    </>
  )
}

export default App
