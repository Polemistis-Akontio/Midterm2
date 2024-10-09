import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {

  const navigate = useNavigate();
  const [emailBody, setEmailBody] = useState("This is the default body of the email");

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  const Submit = async () => {
    // Send the email body to the backend for processing
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject: 'Hackathon', body: emailBody }),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <textarea
        placeholder="Write your message here..."
        value = {emailBody}
        onChange = {(e) => setEmailBody(e.target.value)}
        />
        <button onClick={Submit}>Submit Info</button>
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  