// app/contact/page.jsx
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { ContactForm } from './ContactForm';

// Cache control for better performance
export const revalidate = 3600; // Revalidate every hour

// Generate comprehensive SEO metadata
export async function generateMetadata() {
  return {
    title: 'Contact Us | PrepTive - Report Updates, Get Support & Submit Feedback',
    description: 'Contact PrepTive team to report exam updates, submit corrections, get technical support, or provide feedback. Help us maintain accurate information on admit cards, results, job notifications, and competitive exam updates.',
    keywords: [
      'contact PrepTive',
      'report exam updates',
      'submit correction contact',
      'website feedback',
      'technical support help',
      'admit card updates contact',
      'result notification report',
      'job update submission',
      'exam news feedback',
      'government exam updates contact',
      'UPSC notification report',
      'SSC update contact',
      'Banking exam news',
      'competitive exam information',
    ],
    
    // Open Graph
    openGraph: {
      title: 'Contact Us | PrepTive - Report Updates & Get Support',
      description: 'Contact PrepTive to report exam updates, submit corrections, or provide feedback on our informational content.',
      url: 'https://www.preptive.in/contact',
      siteName: 'PrepTive',
      images: [
        {
          url: 'https://www.preptive.in/og-contact.jpg',
          width: 1200,
          height: 630,
          alt: 'Contact PrepTive to Report Exam Updates & Get Support',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | PrepTive - Report Updates & Get Support',
      description: 'Contact PrepTive team to report exam updates, submit corrections, or provide feedback on our informational content.',
      images: ['https://www.preptive.in/og-contact.jpg'],
      creator: '@preptive_in',
      site: '@preptive_in',
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical
    alternates: {
      canonical: 'https://www.preptive.in/contact',
    },
    
    // Additional SEO
    authors: [{ name: 'PrepTive Editorial Team' }],
    publisher: 'PrepTive',
    category: 'Education News & Updates',
  };
}

// Main Page Component (Server Component)
export default async function ContactPage() {
  const supabase = createClient();
  
  let exams = [];
  
  try {
    const { data: examsData } = await supabase
      .from('examinations')
      .select('id, name')
      .order('name')
      .limit(20);
    
    if (examsData) exams = examsData;
  } catch (error) {
    console.log('Could not fetch exams:', error);
  }

  const gradeOptions = [
    'School Student',
    '10th Class',
    '12th Class',
    'Undergraduate',
    'Graduate',
    'Post Graduate',
    'Working Professional',
    'Other'
  ];

  return (
    <>
      {/* Comprehensive Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact PrepTive - Exam Updates & Information Portal',
            'description': 'Contact page for PrepTive educational information portal providing latest updates on UPSC, SSC, Banking, JEE, NEET and other competitive exams',
            'url': 'https://www.preptive.in/contact',
            'mainEntity': {
              '@type': 'Organization',
              'name': 'PrepTive',
              'description': 'Educational information portal providing latest exam updates, admit cards, results, and job notifications',
              'email': 'mail@preptive.in',
              'telephone': '+918381873457',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Prayagraj',
                'addressLocality': 'Prayagraj',
                'addressRegion': 'Uttar Pradesh',
                'postalCode': '211001',
                'addressCountry': 'IN',
              },
              'areaServed': {
                '@type': 'Country',
                'name': 'India'
              },
              'sameAs': [
                'https://twitter.com/preptive_in',
                'https://facebook.com/preptive',
                'https://instagram.com/preptive',
                'https://linkedin.com/company/preptive',
                'https://youtube.com/@preptive'
              ],
              'knowsAbout': [
                'UPSC Exam Updates',
                'SSC Latest Notifications',
                'Banking Exam Results',
                'JEE Admit Cards',
                'NEET Important Dates',
                'Government Job Notifications',
                'Competitive Exam Syllabus',
                'Exam Calendar Updates'
              ]
            },
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://www.preptive.in'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Contact Us',
                  'item': 'https://www.preptive.in/contact'
                }
              ]
            }
          })
        }}
      />
      
      {/* Additional FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How quickly will I get a response from PrepTive?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We respond to all informational queries and update reports within 24-48 hours. For urgent corrections to exam information, we prioritize review.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What type of information can I report to PrepTive?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'You can report outdated exam information, corrections to admit card dates, result announcements, job notifications, syllabus changes, and technical issues with our website.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Is my information secure when contacting PrepTive?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we maintain strict privacy standards and never share your contact details. Your information is used only to respond to your query.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can I submit new exam updates to PrepTive?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we welcome submissions of new exam updates, notifications, and important dates. Please provide official source links for verification.'
                }
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb Navigation with Schema Markup */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700 font-semibold" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Contact Us</span>
                <meta itemProp="position" content="2" />
              </span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Hero Section with H1 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact <span className="text-blue-600">PrepTive</span> Editorial Team
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Report exam updates, submit corrections, provide feedback, or get support for our informational content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm exams={exams} gradeOptions={gradeOptions} />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Email Addresses */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Email Addresses</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-600">General Inquiries & Updates</span>
                          <a href="mailto:mail@preptive.in" className="text-blue-600 hover:text-blue-800 font-medium">
                            mail@preptive.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-600">Content Corrections</span>
                          <a href="mailto:corrections@preptive.in" className="text-blue-600 hover:text-blue-800 font-medium">
                            corrections@preptive.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-600">Technical Support</span>
                          <a href="mailto:help@preptive.in" className="text-blue-600 hover:text-blue-800 font-medium">
                            help@preptive.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Phone & WhatsApp</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-sm text-gray-600">Call or WhatsApp</span>
                          <a href="tel:+918381873457" className="text-blue-600 hover:text-blue-800 font-medium">
                            +91 8381873457
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Registered Office</h3>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <address className="not-italic text-gray-600">
                          Prayagraj, Uttar Pradesh<br />
                          India - 212503<br />
                          <span className="text-sm text-gray-500">(Information Hub for Exam Updates)</span>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time & FAQ */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Quick Response Time</h3>
                      <p className="text-gray-600 mt-1">
                        We respond to all informational queries and update reports within <strong className="font-semibold">24-48 hours</strong>. Urgent corrections are reviewed promptly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Information Accuracy</h3>
                      <p className="text-gray-600 mt-1">
                        Our editorial team verifies all updates with <strong>official sources</strong>. Report any discrepancies to help us maintain accuracy. Check our <Link href="/faq" className="text-blue-600 hover:underline font-medium">FAQ section</Link> for quick answers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Privacy & Security</h3>
                      <p className="text-gray-600 mt-1">
                        Your information is protected with strict privacy measures. We never share your contact details. Read our{' '}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link> for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Location - Information Hub</h2>
              <p className="text-gray-600 mb-6">
                Based in Prayagraj (formerly Allahabad), Uttar Pradesh - strategically located to stay updated with India's competitive exam ecosystem and educational developments.
              </p>
              
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 font-semibold">Prayagraj, Uttar Pradesh</p>
                  <p className="text-gray-500">Information Hub for Exam Updates</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Email & WhatsApp Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">24h</div>
                  <div className="text-gray-600">Average Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600">Secure & Confidential</div>
                </div>
              </div>
            </div>
          </div>

          {/* Informational SEO Content Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                About PrepTive - Your Exam Information Partner
              </h2>

              <p className="mb-4">
                <strong>PrepTive</strong> is an <strong>informational platform</strong> dedicated to providing the latest updates on competitive exams across India. We focus on delivering accurate, timely information about:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Latest Updates We Cover:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Admit Card Releases & Download Links</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Result Announcements & Direct Links</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Latest Job Notifications & Vacancies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Important Exam Dates & Deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Syllabus Changes & Exam Patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Application Form Updates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Exam Categories:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>UPSC Civil Services & State PSC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>SSC (CGL, CHSL, MTS, GD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Banking (IBPS, SBI, RBI)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Railway Recruitment Exams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Defense (NDA, CDS, AFCAT)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Engineering & Medical (JEE, NEET)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-3 text-lg">
                  📝 How You Can Help Improve PrepTive:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Report Issues:</h4>
                    <ul className="space-y-1 text-yellow-800">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Outdated or incorrect information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Broken links to official websites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Missing important updates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Submit Updates:</h4>
                    <ul className="space-y-1 text-yellow-800">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>New exam notifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Result announcements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">✓</span>
                        <span>Admit card releases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  🔍 Our Information Verification Process:
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <span><strong>Source Verification:</strong> All information is cross-checked with official websites and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <span><strong>Timeliness:</strong> Updates are published as soon as official notifications are released</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <span><strong>Accuracy Focus:</strong> Corrections are made promptly based on user feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <span><strong>Clarity:</strong> Information is presented in simple, easy-to-understand language</span>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}