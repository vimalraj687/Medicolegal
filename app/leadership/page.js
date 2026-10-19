import PageHeader from '@/components/PageHeader';
import LeadershipSection from '@/components/LeadershipSection';
import FounderSpotlight from '@/components/FounderSpotlight';
import { Award } from 'lucide-react';

export const metadata = {
  title: 'Dr. Pankaj Vats & Advisory Council | Five Eyes Medico-Legal Consultants',
  description: 'Profile of Dr. Pankaj Vats, M.D. (AIIMS, New Delhi), LL.B. (Hon\'s), Former Civil Surgeon & Director Health Services Haryana, Dr. Subhash Mehta, and Prof. Rajiv Kumar.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        badge={<><Award size={14} /> Executive Leadership &amp; Council</>}
        title="Dr. Pankaj Vats &amp;"
        titleHighlight="Advisory Council"
        subtitle="Uniting AIIMS post-graduate forensic medicine pedigree with senior governmental health directorship and trial advocacy to provide unshakeable evidentiary defense across India."
        breadcrumbs={[{ label: 'Leadership' }]}
      />
      <FounderSpotlight />
      <LeadershipSection hideHeader />
    </>
  );
}
