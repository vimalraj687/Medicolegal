import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmergencyFloatingButton from '@/components/EmergencyFloatingButton';

export const metadata = {
  metadataBase: new URL('https://medico-legalconsultant.com'),
  title: 'Five Eyes Medico-Legal Consultants | Dr. Pankaj Vats (M.D. AIIMS, LL.B.)',
  description: "India's premier Medico-Legal, Forensic & Health Law Consultancy led by Dr. Pankaj Vats, M.D. (AIIMS), LL.B. Protecting doctors, clinical establishments, PC-PNDT & MTP centres from legal harassment, medical negligence allegations, and statutory non-compliance.",
  keywords: [
    'Five Eyes Medico-Legal Consultants',
    'Dr Pankaj Vats Medico Legal',
    'Medical Negligence Lawyer Gurgaon Delhi NCR',
    'PC PNDT Act Lawyer Machine Sealing Defense',
    'Suing a Doctor for Medical Negligence Defense',
    'Recent Supreme Court Judgement on Medical Negligence',
    'Clinical Establishments Act Compliance Audit',
    'MTP Act 2021 Legal Compliance',
    'Autopsy Post-Mortem Legal Vetting Expert',
    'Forensic Medicine Expert Witness India',
    'Medico Legal Club Risk Management Membership',
    'Hospital Over-billing Mediclaim Fraud Audit'
  ],
  authors: [{ name: 'Dr. Pankaj Vats, M.D. (AIIMS), LL.B. (Hon\'s)' }],
  creator: 'Five Eyes Medico-Legal Consultants',
  publisher: 'Five Eyes Medico-Legal Consultancy Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Five Eyes Medico-Legal Consultants | Medico-Legal & Forensic Experts',
    description: 'Protecting doctors and clinical establishments from venom of PC-PNDT, MTP, CEA & CPA. Led by Dr. Pankaj Vats, M.D. (AIIMS, Delhi), LL.B.',
    url: 'https://medico-legalconsultant.com',
    siteName: 'Five Eyes Medico-Legal Consultants',
    images: [
      {
        url: '/images/dr_pankaj_vats.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Pankaj Vats - Five Eyes Medico-Legal Consultants',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const structuredSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'MedicalOrganization'],
  name: 'Five Eyes Medico-Legal Consultants',
  founder: {
    '@type': 'Person',
    name: 'Dr. Pankaj Vats',
    jobTitle: 'Chairman & Executive Director',
    honorificPrefix: 'Dr.',
    description: 'M.D. Forensic Medicine (AIIMS, New Delhi), LL.B. (Hon\'s), Former Civil Surgeon & District Appropriate Authority PC-PNDT',
  },
  url: 'https://medico-legalconsultant.com',
  telephone: '+91-9728099999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '175, Ganpati Enclave, Near Vinayak Plaza, Opp. Bank of Maharashtra, Main Jharsa Road, Sector 15, Part II',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122001',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹₹',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <EmergencyFloatingButton />
      </body>
    </html>
  );
}
