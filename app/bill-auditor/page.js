import PageHeader from '@/components/PageHeader';
import BillCalculator from '@/components/BillCalculator';
import { Activity } from 'lucide-react';

export const metadata = {
  title: 'Compliance & Hospital Bill Auditor | Five Eyes Medico-Legal Consultants',
  description: 'Interactive PC-PNDT ultrasound statutory compliance risk auditor and forensic hospital over-billing estimator designed by Dr. Pankaj Vats.',
};

export default function BillAuditorPage() {
  return (
    <>
      <PageHeader
        badge={<><Activity size={14} /> Diagnostic &amp; Financial Risk Tool</>}
        title="Statutory Compliance &amp;"
        titleHighlight="Forensic Auditor"
        subtitle="Self-audit your ultrasound centre to detect Form F and inspection vulnerabilities before the District Appropriate Authority conducts an inspection, or reconcile disputed hospital billing against NPPA ceilings."
        breadcrumbs={[{ label: 'Compliance Auditor' }]}
      />
      <BillCalculator hideHeader />
    </>
  );
}
