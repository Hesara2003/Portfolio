export default async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      // Here you can handle the form data, e.g., send an email, save to database, etc.
      // For example, using nodemailer to send an email:
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({ /* SMTP config */ });
      await transporter.sendMail({ from: email, to: 'your-email@example.com', subject, text: message });
  
      res.status(200).json({ message: 'Message sent successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };