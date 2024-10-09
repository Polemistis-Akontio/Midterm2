import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';

const app = express();

// Set your SendGrid API Key
sgMail.setApiKey('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');

// Middleware
app.use(express.json());
app.use(cors()); // Allow CORS for frontend communication

// Handle the email POST request
app.post('/send-email', async (req, res) => {
  const { subject, body } = req.body;

  const msg = {
    to: 'samlpritchett@gmail.com', // The email you want to send to
    from: 'spritchett8@murraystate.edu', // Your verified sender email
    subject: subject,
    text: body,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});