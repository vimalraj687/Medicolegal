import PageHeader from '@/components/PageHeader';
import CaseAssessmentTool from '@/components/CaseAssessmentTool';
import SupremeCourtPrecedents from '@/components/SupremeCourtPrecedents';
import { ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Free Case Review & Statutory Triage | Five Eyes Medico-Legal Consultants',
  description: 'Interactive medico-legal case evaluation reviewed directly by Dr. Pankaj Vats [M.D. AIIMS, LL.B.]. Urgent defense for doctors facing consumer complaints, police notices, or PC-PNDT machine seizures.',
};

export default function CaseAssessmentPage() {
  return (
    <>
      <PageHeader
        badge={<><ShieldAlert size={14} /> Confidential Triage Tool</>}
        title="Free Case Review &amp;"
        titleHighlight="Statutory Triage"
        subtitle="Evaluate your immediate legal exposure under the Consumer Protection Act, Section 106 BNS, PC-PNDT Act, or Clinical Establishments Act, and receive direct strategic guidance from Dr. Pankaj Vats."
        breadcrumbs={[{ label: 'Free Case Review' }]}
      />
      <CaseAssessmentTool hideHeader />
      <SupremeCourtPrecedents />
    </>
  );
}
