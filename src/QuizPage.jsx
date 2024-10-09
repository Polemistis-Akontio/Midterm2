import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();
  const [Answer1, setAnswer1] = useState(false);
  const [Answer2, setAnswer2] = useState(false);
  const [Answer3, setAnswer3] = useState(false);

  const GoToWelcomePage = () => {

    const answerOne = document.getElementById("answer1").value;
    const answerTwo = document.getElementById("answer2").value;
    const answerThree = document.getElementById("answer3").value;

    if (answerOne === "True" || answerOne === "true") {
      setAnswer1(true);
    }
    if (answerTwo === "True" || answerTwo === "true"){
      setAnswer2(true);
    }
    if (answerThree === "True" || answerThree === "true"){
      setAnswer3(true);
    }

    if (Answer1 === true && Answer2 === true && Answer3 === true) {
      navigate('/welcome');
    }
    else{
      alert("Answer is wrong");
    }
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <p>Question 1: True or False? React is superior to vanilla Javascript.</p>
        <p>Question 2: True or False? Javascript is the basis for React.</p>
        <p>Question 3: True or False? React uses HTML.</p>
        <label htmlFor='answer1'>Answer 1:</label>
        <input type='text' id="answer1"></input>
        <label htmlFor='answer2'>Answer 2:</label>
        <input type='text' id="answer2"></input>
        <label htmlFor='answer3'>Answer 3:</label>
        <input type='text' id="answer3"></input>
        <button onClick={GoToWelcomePage}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  