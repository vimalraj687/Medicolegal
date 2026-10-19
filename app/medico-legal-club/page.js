import PageHeader from '@/components/PageHeader';
import MedicoLegalClub from '@/components/MedicoLegalClub';
import FaqSection from '@/components/FaqSection';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Medico-Legal Club (Risk Management) | Five Eyes Medico-Legal Consultants',
  description: 'Proactive 365-day annual legal armor for doctors, ultrasound centres, and hospitals. 24/7 emergency distress hotline, routine statutory audits, and direct access to Dr. Pankaj Vats.',
};

export default function MedicoLegalClubPage() {
  return (
    <>
      <PageHeader
        badge={<><ShieldCheck size={14} /> Annual Risk Management Shield</>}
        title="Medico-Legal Club"
        titleHighlight="Membership Portal"
        subtitle="Ensure compliance with all health and medical laws. Shield your medical license, ultrasound equipment, and healthcare facility with 24/7 legal panic assistance and routine audits."
        breadcrumbs={[{ label: 'Medico-Legal Club' }]}
      />
      <MedicoLegalClub hideHeader />
      <FaqSection hideHeader />
    </>
  );
}
