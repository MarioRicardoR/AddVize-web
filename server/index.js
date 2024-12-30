const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const resend = new Resend('re_MSyrFzCg_B8MH7RqCkgvF81S5yAqfawfC');

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { email, name, businessName, projectType, website, phone } = req.body;

    if (!email || !name || !businessName) {
      console.error('Missing required fields');
      return res.status(400).json({ error: 'Informations manquantes' });
    }

    console.log('Sending email...');
    const result = await resend.emails.send({
      from: 'AddVize <onboarding@resend.dev>',
      to: ['contact@addvize.com'],
      subject: 'Nouveau contact AddVize',
      html: `
        <h2>Nouveau contact depuis le site web</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${businessName}</p>
        <p><strong>Type de projet:</strong> ${projectType}</p>
        ${website ? `<p><strong>Site web:</strong> ${website}</p>` : ''}
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
      `
    });

    console.log('Email sent successfully:', result);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
