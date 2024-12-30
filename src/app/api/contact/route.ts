import { Resend } from 'resend';

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || '';
console.log('Using API Key:', RESEND_API_KEY);
const resend = new Resend(RESEND_API_KEY);

export async function handleContactForm(data: any) {
  try {
    console.log('Form data received:', data);

    // Validation basique
    if (!data.email || !data.name || !data.businessName) {
      console.error('Validation failed:', { email: data.email, name: data.name, businessName: data.businessName });
      throw new Error('Informations manquantes');
    }

    // Envoi de l'email
    console.log('Attempting to send email...');
    const result = await resend.emails.send({
      from: 'AddVize <onboarding@resend.dev>',
      to: ['contact@addvize.com'],
      subject: 'Nouveau contact AddVize',
      html: `
        <h2>Nouveau contact depuis le site web</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Entreprise:</strong> ${data.businessName}</p>
        <p><strong>Type de projet:</strong> ${data.projectType}</p>
        ${data.website ? `<p><strong>Site web:</strong> ${data.website}</p>` : ''}
        ${data.phone ? `<p><strong>Téléphone:</strong> ${data.phone}</p>` : ''}
      `
    });

    console.log('Email sent successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Detailed error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message' };
  }
}
