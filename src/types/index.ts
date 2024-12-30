export interface ContactFormData {
  projectType: 'website' | 'seo' | 'ai' | 'other';
  otherDescription?: string;
  businessName: string;
  website?: string;
  name: string;
  email: string;
  phone?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}