import PageHeader from '@/components/PageHeader';
import EventsSection from '@/components/EventsSection';
import ColomboSummit from '@/components/ColomboSummit';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Workshops, CMEs & Colombo Summit | Five Eyes Medico-Legal Consultants',
  description: 'National medico-legal workshops on PC-PNDT compliance, doctor defense against Section 106 BNS, hospital crisis management, and the International Medico-Legal Conference in Colombo led by Dr. Pankaj Vats.',
};

export default function ConferencePage() {
  return (
    <>
      <PageHeader
        badge={<><Calendar size={14} /> Professional Education &amp; Global Summits</>}
        title="Medico-Legal Workshops &amp;"
        titleHighlight="CME Events"
        subtitle="Master the nuances of healthcare laws through interactive, case-based workshops and international symposia led by Dr. Pankaj Vats [Ex-Civil Surgeon &amp; PNDT Authority] and senior medico-legal faculty."
        breadcrumbs={[{ label: 'Events & Workshops' }]}
      />
      <ColomboSummit />
      <EventsSection hideHeader />
    </>
  );
}
