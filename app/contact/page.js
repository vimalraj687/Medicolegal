import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Gurugram Chamber | Five Eyes Medico-Legal Consultants',
  description: 'Connect with Dr. Pankaj Vats at Five Eyes Medico-Legal chamber in Sector 15 Part II, Gurgaon. 24/7 Emergency Doctor Defense Hotline: +91 97280 99999.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge={<><Mail size={14} /> Confidential Chamber Consultation</>}
        title="Connect with Our"
        titleHighlight="Gurugram Chamber"
        subtitle="Prior appointment consultations with Dr. Pankaj Vats at Sector 15 Part II, Gurgaon, or 24/7 emergency telephone and WhatsApp intervention for sudden raids, police notices, or patient unrest."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <ContactSection hideHeader />
    </>
  );
}
