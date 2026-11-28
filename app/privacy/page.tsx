import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout, { type LegalSection } from '@/components/shared/LegalPageLayout';
import { CONTACT_INFO } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy | DataLive Intelligence',
  description:
    'How DataLive Intelligence collects, processes, and safeguards business inquiry information and enforces enterprise data sovereignty.',
  alternates: {
    canonical: 'https://dataliveintelligence.com/privacy',
  },
};

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'scope',
    title: 'Overview & Data Fiduciary Scope',
    paragraphs: [
      'DataLive Intelligence ("DataLive", "we", "our", or "us"), operating from Coimbatore, Tamil Nadu, India, provides Power BI consulting, SQL reporting architectures, Excel automation, automated MIS reporting, and RPA development services.',
      'This Privacy Policy describes how we handle personal and business contact information collected through https://dataliveintelligence.com (and associated discovery channels) as well as our strict separation between public website inquiries and confidential client operational data.',
    ],
  },
  {
    id: 'information-collected',
    title: 'Information We Collect',
    paragraphs: [
      'We collect only the business contact details you voluntarily submit when requesting a consultation or discovery call, plus standard infrastructure request metadata.',
    ],
    bullets: [
      {
        label: 'Website Consultation & Contact Forms',
        text: 'When you submit an inquiry on our Home page or Contact page, we collect your full name, work email address, phone number, company name, selected industry vertical, service area of interest (such as Power BI Solutions, SQL, Excel, MIS, or RPA), and project message.',
      },
      {
        label: 'Direct Communication Channels',
        text: `If you call ${CONTACT_INFO.phoneDisplay}, message us on WhatsApp, or email ${CONTACT_INFO.email}, we retain correspondence details necessary to respond to your consultation request.`,
      },
      {
        label: 'Server & Security Logs',
        text: 'Our hosting and backend API infrastructure may temporarily log IP addresses, browser user-agent strings, and timestamps strictly for security, rate limiting, and uptime monitoring.',
      },
    ],
  },
  {
    id: 'client-data-sovereignty',
    title: 'Client Business Data & Strict NDA Isolation',
    paragraphs: [
      'Your operational company figures (such as Tally ledgers, ERP records, SQL databases, financial reports, and spreadsheets) are never requested or uploaded through our public marketing website forms.',
      'Before inspecting any client datasets or connecting to internal ERP/SQL environments during a project, DataLive Intelligence executes a strict Non-Disclosure Agreement (NDA). Production BI models, data pipelines, and credentials stay inside your designated cloud tenant or on-premise infrastructure with role-based access control.',
    ],
    note: 'Client data sovereignty is a core engineering principle: DataLive does not retain ownership over client datasets or use client business figures to train external models.',
  },
  {
    id: 'how-we-use',
    title: 'How We Use Inquiry Information',
    paragraphs: [
      'We use contact details submitted through the website solely to:',
    ],
    bullets: [
      {
        label: 'Discovery & Scoping',
        text: 'Schedule 30-minute architecture calls, evaluate reporting bottlenecks, and prepare custom BI/automation roadmaps.',
      },
      {
        label: 'Client Support & SLA Response',
        text: `Respond to requests within our target service window (${CONTACT_INFO.slaGuarantee}) and coordinate ongoing project delivery.`,
      },
      {
        label: 'Security & Abuse Prevention',
        text: 'Prevent spam form submissions and safeguard our backend contact endpoint.',
      },
    ],
    note: 'We never sell, rent, or distribute your contact information to third-party lead brokers or external marketing lists.',
  },
  {
    id: 'cookies-storage',
    title: 'Cookies & Browser Storage',
    paragraphs: [
      'This website does not deploy invasive cross-site advertising cookies or third-party behavioral ad trackers.',
      'Standard strictly necessary browser session behavior or hosting-level technical headers may be used solely to render pages smoothly and deliver form requests reliably.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Channels & Partner Links',
    paragraphs: [
      'Our website includes links to external communication platforms and technology partners — including WhatsApp direct chat (wa.me) and our web engineering partner KodeToMates (kodetomates.in).',
      'When you open an external link or initiate a WhatsApp message, your communication is also governed by the privacy policy and terms of that external service.',
    ],
  },
  {
    id: 'retention-security',
    title: 'Data Retention & Security Safeguards',
    paragraphs: [
      'Website inquiry records are retained only for as long as needed to handle your business inquiry, maintain active engagement records, or fulfill statutory accounting/legal requirements.',
      'All website form traffic is transmitted over encrypted HTTPS connections, and access to lead submissions is restricted to authorized DataLive leads.',
    ],
  },
  {
    id: 'rights-grievance',
    title: 'Your Rights & Grievance Redressal',
    paragraphs: [
      'In line with India’s Digital Personal Data Protection (DPDP) Act, 2023 and applicable IT rules, you may request access to, correction of, or deletion of the inquiry contact data you submitted to us, or withdraw consent for follow-up communications.',
      `To submit a privacy request or grievance, please email ${CONTACT_INFO.email} or call ${CONTACT_INFO.phoneDisplay} (${CONTACT_INFO.hours}).`,
    ],
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect service enhancements or legal updates. The latest revision date is always displayed at the top of this page.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacy & Data Sovereignty"
      titleStart="Privacy"
      titleAccent="Policy"
      subtitle="Transparent standards detailing how DataLive Intelligence protects inquiry contact data and isolates confidential enterprise reporting environments."
      lastUpdated="November 28, 2026"
      effectiveDate="November 28, 2026"
      activeDoc="privacy"
      highlights={[
        'Public forms collect only business inquiry details — never raw ERP or financial datasets.',
        'All client data connections operate under signed NDAs inside your own tenant.',
        'Zero ad-tracking cookies; request data access or deletion anytime via email.',
      ]}
      sections={PRIVACY_SECTIONS}
    />
  );
}
