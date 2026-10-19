import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import ServiceDetailView from '@/components/ServiceDetailView';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Practice Area Not Found' };

  return {
    title: `${service.title} | Five Eyes Medico-Legal Consultants`,
    description: service.heroSubtitle,
    keywords: [
      service.title,
      service.statutoryFramework,
      'Dr Pankaj Vats Medico Legal',
      'Doctor Defense Lawyer Gurgaon Delhi NCR',
      'Supreme Court Medical Negligence Lawyer'
    ],
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return <ServiceDetailView service={service} otherServices={otherServices} />;
}
