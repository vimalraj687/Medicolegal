import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/ServicesGrid';
import AudienceSelector from '@/components/AudienceSelector';
import { Scale } from 'lucide-react';

export const metadata = {
  title: 'Medico-Legal Practice Areas | Five Eyes Medico-Legal Consultants',
  description: 'Specialized medico-legal defense for doctors, ultrasound machine de-sealing under PC-PNDT, MTP compliance, Clinical Establishments Act audits, and forensic autopsy vetting.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge={<><Scale size={14} /> Comprehensive Legal &amp; Forensic Capabilities</>}
        title="Specialized Medico-Legal"
        titleHighlight="Practice Areas"
        subtitle="Where medical science meets judicial jurisprudence. Led by Dr. Pankaj Vats [M.D. AIIMS, LL.B.], combining 34+ years of medical, forensic, and governmental experience to defend doctors and clinical establishments across India."
        breadcrumbs={[{ label: 'Practice Areas' }]}
      />
      <AudienceSelector />
      <ServicesGrid hideHeader />
    </>
  );
}
