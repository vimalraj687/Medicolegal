import PageHeader from '@/components/PageHeader';
import FaqSection from '@/components/FaqSection';
import SupremeCourtPrecedents from '@/components/SupremeCourtPrecedents';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Medico-Legal FAQs & Knowledge Base | Five Eyes Medico-Legal Consultants',
  description: 'Authoritative answers to common questions on medical negligence, PC-PNDT machine sealing, police notices, consent laws, and Supreme Court doctor protections.',
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        badge={<><HelpCircle size={14} /> Medical Jurisprudence Knowledge Base</>}
        title="Frequently Asked"
        titleHighlight="Medico-Legal Questions"
        subtitle="Clear, authoritative answers from Dr. Pankaj Vats on doctor defense against criminal charges, PC-PNDT inspections, informed consent validity, and hospital dispute resolution."
        breadcrumbs={[{ label: 'FAQ' }]}
      />
      <FaqSection hideHeader />
      <SupremeCourtPrecedents />
    </>
  );
}
