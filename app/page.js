import Hero from '@/components/Hero';
import AudienceSelector from '@/components/AudienceSelector';
import FounderSpotlight from '@/components/FounderSpotlight';
import ServicesGrid from '@/components/ServicesGrid';
import CaseAssessmentTool from '@/components/CaseAssessmentTool';
import BillCalculator from '@/components/BillCalculator';
import SupremeCourtPrecedents from '@/components/SupremeCourtPrecedents';
import MedicoLegalClub from '@/components/MedicoLegalClub';
import LeadershipSection from '@/components/LeadershipSection';
import EventsSection from '@/components/EventsSection';
import QuickLinks from '@/components/QuickLinks';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceSelector />
      <FounderSpotlight />
      <ServicesGrid />
      <CaseAssessmentTool />
      <BillCalculator />
      <SupremeCourtPrecedents />
      <MedicoLegalClub />
      <LeadershipSection />
      <EventsSection />
      <QuickLinks />
      <FaqSection />
      <ContactSection />
    </>
  );
}
