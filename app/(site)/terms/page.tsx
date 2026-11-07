import type { Metadata } from 'next';
import Link from 'next/link';
import { DRIVER_APP, RIDER_APP, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the detailed Terms of Service governing the use of the Omni technology platform, rides, parcel delivery, and captain services in Bengaluru.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

const Mark = () => (
  <svg viewBox="0 0 48 28" aria-hidden="true">
    <rect x="3" y="3" width="42" height="22" rx="11" fill="none" stroke="currentColor" strokeWidth="5" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function TermsPage() {
  return (
    <>
      <header className="nav">
        <Link href="/" className="logo" aria-label="Omni home">
          <Mark />
          <span>Omni</span>
        </Link>
        <nav aria-label="Primary">
          <Link href="/#how">How it works</Link>
          <Link href="/#drivers">Drivers</Link>
          <Link href="/#technology">Technology</Link>
        </nav>
        <a href={DRIVER_APP} target="_blank" rel="noopener noreferrer" className="btn btn-yellow btn-sm">
          Drive with Omni
        </a>
      </header>

      <div className="legal-header">
        <Link href="/" className="back-link">
          <BackIcon /> Back to Home
        </Link>
        <h1>Terms of Service</h1>
        <p className="meta">Last Updated: November 7, 2026 | Effective Date: November 7, 2026</p>
      </div>

      <main className="legal-body">
        <nav className="legal-toc" aria-label="Table of contents">
          <h2>Contents</h2>
          <ol>
            <li><a href="#intro">1. Introduction & Acceptance</a></li>
            <li><a href="#platform-role">2. The Platform & Intermediary Role</a></li>
            <li><a href="#accounts-kyc">3. Accounts, Eligibility & Captain KYC</a></li>
            <li><a href="#rides">4. Passenger Rides</a></li>
            <li><a href="#parcels">5. Parcel Delivery & Prohibited Items</a></li>
            <li><a href="#orders">6. Food & Merchant Deliveries</a></li>
            <li><a href="#pricing">7. Pricing, Fares, Tolls & Taxes</a></li>
            <li><a href="#payments-payouts">8. Payments & Captain Payouts</a></li>
            <li><a href="#cancellations">9. Cancellations, Wait Times & Refunds</a></li>
            <li><a href="#safety">10. Safety, Zero Tolerance & Conduct</a></li>
            <li><a href="#prohibited-use">11. Prohibited Activities</a></li>
            <li><a href="#intellectual-property">12. Intellectual Property</a></li>
            <li><a href="#liability">13. Disclaimers & Limitation of Liability</a></li>
            <li><a href="#indemnity">14. Indemnification</a></li>
            <li><a href="#termination">15. Suspension & Termination</a></li>
            <li><a href="#grievance">16. Grievance Redressal & Dispute Resolution</a></li>
            <li><a href="#governing-law">17. Governing Law & Jurisdiction</a></li>
            <li><a href="#amendments">18. Amendments & Updates</a></li>
          </ol>
        </nav>

        <section id="intro" className="legal-section">
          <h2>1. Introduction & Acceptance of Terms</h2>
          <p>
            Welcome to <strong>Omni</strong>. These Terms of Service (&quot;<strong>Terms</strong>&quot;) constitute a legally binding agreement
            between you (whether as a passenger, customer, consignor, recipient, or driver partner, hereinafter referred to as &quot;<strong>User</strong>&quot;,
            &quot;<strong>Captain</strong>&quot;, &quot;<strong>you</strong>&quot;, or &quot;<strong>your</strong>&quot;) and <strong>Omni Technologies Private Limited</strong>
            (&quot;<strong>Omni</strong>&quot;, &quot;<strong>Company</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, or &quot;<strong>our</strong>&quot;).
          </p>
          <p>
            These Terms govern your access to and use of the Omni mobile applications (including the <em>Omni Customer App</em> and the <em>Omni Captain App</em>),
            our website situated at <code>https://omnimu.vercel.app</code>, APIs, call centers, and associated online products and services
            (collectively, the &quot;<strong>Platform</strong>&quot;).
          </p>
          <div className="legal-callout">
            <p>
              <strong>IMPORTANT:</strong> BY DOWNLOADING, INSTALLING, REGISTERING WITH, OR USING THE PLATFORM, YOU EXPRESSLY ACKNOWLEDGE AND AGREE
              TO BE BOUND BY THESE TERMS, TOGETHER WITH OUR PRIVACY POLICY AND ANY APPLICABLE OPERATING RULES. IF YOU DO NOT AGREE TO THESE TERMS,
              YOU MUST NOT ACCESS OR USE THE PLATFORM.
            </p>
          </div>
        </section>

        <section id="platform-role" className="legal-section">
          <h2>2. The Platform & Intermediary Role</h2>
          <p>
            Omni provides a unified technological routing and scheduling platform that connects customers seeking mobility, food ordering, and courier delivery
            services with independent third-party transport and logistics operators (&quot;<strong>Captains</strong>&quot;).
          </p>
          <p>
            You expressly acknowledge and agree that:
          </p>
          <ul>
            <li>
              <strong>Intermediary Status:</strong> Omni operates solely as an electronic intermediary platform within the meaning of Section 2(1)(w)
              of the Information Technology Act, 2000, and as an aggregator under the Motor Vehicles Act, 1988 (as amended) and the Motor Vehicle Aggregator Guidelines.
            </li>
            <li>
              <strong>Independent Contractor Relationship:</strong> Captains are independent contractors providing transport and logistics services.
              Captains are not employees, agents, joint venturers, or partners of Omni. Omni does not own, lease, or operate the vehicles, nor does it control
              the physical driving behavior of Captains.
            </li>
            <li>
              <strong>Contract for Services:</strong> Any contract for passenger transportation or courier delivery is entered into directly between the
              requesting customer and the providing Captain. Omni is not a party to that transport agreement, but facilitates request discovery, routing optimization,
              fare estimation, and collection on behalf of the Captain.
            </li>
          </ul>
        </section>

        <section id="accounts-kyc" className="legal-section">
          <h2>3. Accounts, Eligibility & Captain KYC</h2>
          <h3>3.1 Eligibility</h3>
          <p>
            You must be at least 18 years of age and legally competent to enter into contracts under the Indian Contract Act, 1872. By registering, you warrant
            that you meet all eligibility requirements.
          </p>

          <h3>3.2 Customer Accounts</h3>
          <p>
            To use passenger rides or parcel delivery, you must register using an authentic Indian mobile phone number (+91) and complete One-Time Password (OTP)
            verification. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h3>3.3 Captain Onboarding & Verification (KYC)</h3>
          <p>
            Individuals wishing to operate as Captains must complete the onboarding procedure through the Omni Captain app:
          </p>
          <ul>
            <li>Submit verified legal name, mobile number, and permanent address.</li>
            <li>Provide a valid commercial or transport driving licence (DL) issued by an authorized Indian Regional Transport Office (RTO).</li>
            <li>Provide vehicle registration certificate (RC), fitness certificate, valid third-party insurance, and Pollution Under Control (PUC) certificate.</li>
            <li>Complete Aadhaar-based and/or government-sanctioned identity and criminal background screening.</li>
            <li>
              <strong>Bank Details:</strong> Provide valid Indian bank account details (account holder name, bank account number, and IFSC code)
              for weekly earnings payouts. You represent that the bank account provided belongs legally to you.
            </li>
          </ul>
          <p>
            Omni reserves the right to reject, suspend, or terminate any Captain profile that fails initial or recurring verification, or whose vehicle
            fails safety standards.
          </p>
        </section>

        <section id="rides" className="legal-section">
          <h2>4. Passenger Transportation (Rides)</h2>
          <h3>4.1 Booking & Dispatch</h3>
          <p>
            When a passenger requests a ride, Omni&apos;s clustering engine matches the request with the most optimal nearby vehicle heading in the matching
            direction (auto-rickshaw, sedan, SUV, or bike). Matches depend on availability, traffic, and proximity.
          </p>

          <h3>4.2 OTP Verification</h3>
          <p>
            For safety and accurate fulfillment, every ride requires a unique 4-digit One-Time Password (OTP) displayed on the passenger&apos;s app.
            The ride legally commences only after the Captain enters and validates the correct OTP on the Captain app. Passengers must never disclose the OTP
            until they are physically verified at the vehicle.
          </p>

          <h3>4.3 Routes & Multi-Modal Sequencing</h3>
          <p>
            Omni optimizes transit routes dynamically. Depending on the ride type selected, the vehicle may pick up or deliver small parcels along the route
            if it does not unreasonably delay passenger arrival. Real-time estimated times of arrival (ETAs) are calculated algorithmically and may vary
            due to road works, traffic congestion, or adverse weather.
          </p>
        </section>

        <section id="parcels" className="legal-section">
          <h2>5. Parcel Delivery & Prohibited Items</h2>
          <h3>5.1 Scope of Courier Service</h3>
          <p>
            The parcel delivery feature allows users to dispatch legal goods, documents, and packages within the serviceable limits of Bengaluru.
            The sender must securely package the parcel to withstand standard vehicle transport.
          </p>

          <h3>5.2 Strict Prohibition on Dangerous and Contraband Goods</h3>
          <div className="legal-callout warning">
            <p>
              <strong>PROHIBITED ITEMS:</strong> Senders must NEVER book or hand over any of the following items for delivery:
            </p>
          </div>
          <ul>
            <li>Illegal narcotics, psychotropic substances, or prescription medicines without authorized licenses under the NDPS Act.</li>
            <li>Explosives, firearms, ammunition, fireworks, weapons, or flammable liquids and toxic chemicals.</li>
            <li>Currency notes, coins, bearer cheques, unmounted precious stones, bullions, or sovereign gold bonds.</li>
            <li>Live animals, insects, or biological specimens.</li>
            <li>Perishable meat or seafood not packaged in temperature-controlled certified containers.</li>
            <li>Pornographic, seditious, or counterfeit material.</li>
            <li>Any item whose transit, possession, or sale is prohibited by applicable central, state, or municipal laws.</li>
          </ul>
          <p>
            Omni and Captains reserve the right to inspect parcels if there is reasonable suspicion of contraband. If prohibited items are detected,
            the booking will be terminated immediately, and the matter will be reported to law enforcement authorities without refund.
          </p>

          <h3>5.3 Handover & Delivery Verification</h3>
          <p>
            Parcels are tracked in real-time. Delivery completion requires a recipient handover confirmation (signature or recipient delivery OTP).
            If the recipient cannot be contacted within 10 minutes at the drop location, the Captain will return the package to the sender at the sender&apos;s
            expense.
          </p>
        </section>

        <section id="orders" className="legal-section">
          <h2>6. Food & Merchant Deliveries</h2>
          <p>
            Where Omni routes orders from restaurants, kirana stores, or local merchants:
          </p>
          <ul>
            <li>Omni acts as a delivery facilitator and is not the seller or producer of the goods or food items.</li>
            <li>Merchant partners are solely responsible for food hygiene, freshness, accurate item preparation, and compliance with the Food Safety and Standards Authority of India (FSSAI).</li>
            <li>Captains deliver sealed food packages and must not tamper with or open food seals.</li>
          </ul>
        </section>

        <section id="pricing" className="legal-section">
          <h2>7. Pricing, Fares, Tolls & Taxes</h2>
          <h3>7.1 Fare Structure</h3>
          <p>
            Fares are computed transparently before you confirm a booking based on:
          </p>
          <ul>
            <li><strong>Base Fare:</strong> Initial boarding or dispatch charge.</li>
            <li><strong>Distance Fare:</strong> Calculated based on the optimal GPS trajectory traveled.</li>
            <li><strong>Time Fare:</strong> Time spent in transit, including traffic delays.</li>
            <li><strong>Route Clustering Discount:</strong> When Omni batches multi-service trips along the same corridor, efficiency savings are passed down to reduce overall customer fares.</li>
            <li><strong>Dynamic Pricing:</strong> During peak hours, bad weather, or high demand in specific micro-markets, dynamic surge factors may apply, clearly disclosed before booking.</li>
          </ul>

          <h3>7.2 Tolls & Parking</h3>
          <p>
            Any toll bridge fees, toll road charges (e.g., Bengaluru Electronic City flyover, airport expressway tolls), and parking fees incurred specifically
            for the user&apos;s trip are payable in full by the customer and added to the final invoice.
          </p>

          <h3>7.3 Taxes</h3>
          <p>
            Applicable Goods and Services Tax (GST) and state levies are collected in accordance with Indian tax statutes and displayed on the digital tax invoice.
          </p>
        </section>

        <section id="payments-payouts" className="legal-section">
          <h2>8. Payments & Captain Payouts</h2>
          <h3>8.1 Customer Payments</h3>
          <p>
            Customers may pay fares via authorized in-app digital payment methods (UPI, debit/credit cards, net banking, mobile wallets) or direct cash to the Captain.
            All online transactions are processed through RBI-authorized payment aggregators utilizing encryption.
          </p>

          <h3>8.2 Captain Earnings & Payout Schedule</h3>
          <p>
            Captains earn remuneration for completed rides, parcel deliveries, and food drops. Omni deducts an agreed platform commission / facilitation fee
            for matching, navigation, and billing services.
          </p>
          <ul>
            <li>
              <strong>Bank Settlements:</strong> Net earnings are disbursed directly into the Captain&apos;s verified bank account via automated IMPS or NEFT
              on a regular settlement schedule (e.g., weekly or bi-weekly).
            </li>
            <li>
              <strong>Tax Deductions (TDS):</strong> Omni complies with Section 194C and Section 194-O of the Indian Income Tax Act, deducting tax at source
              where required by law and remitting it against the Captain&apos;s PAN.
            </li>
            <li>
              <strong>Account Accuracy:</strong> Captains must ensure their bank details (account number and IFSC code) are accurate. Omni shall not be liable
              for delays or losses caused by erroneous bank account details provided by the Captain.
            </li>
          </ul>
        </section>

        <section id="cancellations" className="legal-section">
          <h2>9. Cancellations, Wait Times & Refunds</h2>
          <h3>9.1 Cancellation by Passenger / Consignor</h3>
          <p>
            You may cancel a booking free of charge within a defined grace period (typically 2 to 3 minutes) after a Captain has accepted. If you cancel
            after the Captain has arrived at the pickup location or has driven a substantial distance towards you, a nominal cancellation fee will be charged
            to compensate the Captain for fuel and time.
          </p>

          <h3>9.2 Waiting Time Charges</h3>
          <p>
            Captains will wait up to 5 minutes at the designated pickup location without surcharge. Additional waiting time beyond this free period is billed
            at the standard per-minute waiting rate.
          </p>

          <h3>9.3 Cancellation by Captain</h3>
          <p>
            Captains are independent operators and may decline or cancel requests before pickup under valid circumstances (e.g., vehicle mechanical breakdown,
            safety hazard, or customer unresponsiveness). Habitual arbitrary cancellations by Captains negatively impact their platform rating and may lead
            to account suspension.
          </p>

          <h3>9.4 Refunds</h3>
          <p>
            In the event of double deduction, driver no-show where a fee was charged, or proven service deficiency, you may file a dispute through the
            app support center within 48 hours of trip completion. Validated refund amounts are credited back to the original payment source within 5 to 7
            banking days.
          </p>
        </section>

        <section id="safety" className="legal-section">
          <h2>10. Safety, Zero Tolerance & Code of Conduct</h2>
          <h3>10.1 Mutual Respect</h3>
          <p>
            Omni is committed to providing a safe, courteous, and non-discriminatory environment for all passengers and Captains. Verbal abuse, physical aggression,
            unwelcome sexual remarks, and discrimination based on caste, religion, gender, sexual orientation, disability, or language are strictly prohibited.
          </p>

          <h3>10.2 Zero Tolerance for Intoxication & Narcotics</h3>
          <div className="legal-callout warning">
            <p>
              Omni maintains a strict ZERO TOLERANCE policy regarding alcohol or illegal substance consumption during the provision or receipt of services.
              Captains must never operate a vehicle under the influence. Immediate permanent deactivation and police referral apply to any violation.
            </p>
          </div>

          <h3>10.3 Emergency SOS & Live Tracking</h3>
          <p>
            The Platform provides an emergency SOS button and live ride sharing features. Activating the SOS transmits vehicle coordinates, Captain details,
            and trip status directly to your designated emergency contacts and our 24/7 safety response team, who may alert law enforcement authorities.
          </p>
        </section>

        <section id="prohibited-use" className="legal-section">
          <h2>11. Prohibited Activities</h2>
          <p>
            Users and Captains agree not to engage in any of the following activities:
          </p>
          <ul>
            <li>Using mock location apps, GPS spoofing, or emulators to manipulate trip metrics or Captain availability.</li>
            <li>Colluding between drivers and passengers to generate fictitious trips or abuse promotional coupons and incentives.</li>
            <li>Soliciting off-platform cash rides or deliveries to bypass safety features and platform fees.</li>
            <li>Reverse engineering, decompiling, or attempting to extract source code, routing algorithms, or user databases from the Platform.</li>
            <li>Using automated crawlers, scrapers, or bots to query pricing or driver coordinates.</li>
            <li>Subletting, transferring, or allowing an unregistered individual to operate under your verified Captain account.</li>
          </ul>
        </section>

        <section id="intellectual-property" className="legal-section">
          <h2>12. Intellectual Property Rights</h2>
          <p>
            All intellectual property rights in and to the Omni Platform, including software code, graphic marks, logos, icons, user interfaces, routing
            optimization algorithms, and compilation of data, are the exclusive property of Omni Technologies Private Limited.
          </p>
          <p>
            Subject to your compliance with these Terms, Omni grants you a limited, non-exclusive, non-transferable, revocable license to download and use the
            mobile apps on your personal mobile devices solely for your personal or authorized professional use.
          </p>
        </section>

        <section id="liability" className="legal-section">
          <h2>13. Disclaimers & Limitation of Liability</h2>
          <h3>13.1 &quot;As Is&quot; Provision</h3>
          <p>
            THE PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. OMNI EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS,
            IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h3>13.2 Third-Party Action Disclaimers</h3>
          <p>
            OMNI DOES NOT GUARANTEE THE TIMELINESS, SAFETY, QUALITY, SUITABILITY, OR ABILITY OF THIRD-PARTY CAPTAINS. YOU AGREE THAT THE ENTIRE RISK ARISING
            OUT OF YOUR USE OF THE SERVICES REMAINS SOLELY WITH YOU TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW.
          </p>

          <h3>13.3 Limitation of Liability</h3>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, OMNI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES,
            INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE ARISING FROM OR IN CONNECTION WITH THE USE OF THE PLATFORM.
          </p>
          <p>
            IN NO EVENT SHALL OMNI&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE TOTAL FARES PAID OR RECEIVED BY YOU THROUGH THE PLATFORM
            IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR FIVE THOUSAND INDIAN RUPEES (INR 5,000), WHICHEVER IS LESS.
          </p>
        </section>

        <section id="indemnity" className="legal-section">
          <h2>14. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Omni, its directors, officers, employees, and agents from and against any and all claims, demands,
            losses, liabilities, damages, and expenses (including reasonable legal fees) arising out of or in connection with:
          </p>
          <ul>
            <li>Your breach of these Terms or any applicable statutory regulation.</li>
            <li>Your violation of the rights of any third party, including Captains, passengers, pedestrians, or merchants.</li>
            <li>Any damage to property or physical injury caused by your willful misconduct, negligence, or unlawful actions.</li>
            <li>For senders of parcels: Any claim arising from dispatching prohibited, dangerous, or unsuitably packed goods.</li>
          </ul>
        </section>

        <section id="termination" className="legal-section">
          <h2>15. Suspension & Termination</h2>
          <p>
            Omni reserves the right to immediately suspend, restrict, or terminate your access to the Platform without prior notice if:
          </p>
          <ul>
            <li>You breach any provision of these Terms or our community guidelines.</li>
            <li>A Captain&apos;s ratings drop below minimum platform quality benchmarks or vehicle documents expire.</li>
            <li>You provide falsified identity, invalid driving licence, or fraudulent bank account information.</li>
            <li>We suspect fraudulent, deceptive, abusive, or unlawful activities on your account.</li>
          </ul>
          <p>
            You may deactivate your account at any time through the in-app profile settings, subject to settling any outstanding trip payments.
          </p>
        </section>

        <section id="grievance" className="legal-section">
          <h2>16. Grievance Redressal & Dispute Resolution</h2>
          <p>
            In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Consumer Protection
            (E-Commerce) Rules, 2020, Omni has appointed a designated Grievance Officer:
          </p>
          <div className="legal-callout">
            <p>
              <strong>Grievance Officer:</strong> Legal & Compliance Officer<br />
              <strong>Company:</strong> Omni Technologies Private Limited<br />
              <strong>Address:</strong> Residency Road, Ashok Nagar, Bengaluru, Karnataka 560025, India<br />
              <strong>Email:</strong> <code>grievance@omnimu.vercel.app</code> | <code>support@omnimu.vercel.app</code><br />
              <strong>Response Time:</strong> Acknowledgment within 48 hours; resolution within 30 days of receipt of grievance.
            </p>
          </div>
          <p>
            Any dispute, controversy, or claim arising out of these Terms shall first be attempted to be settled amicably through good-faith mediation.
            If unresolved within 30 days, disputes shall be referred to arbitration in Bengaluru under the Arbitration and Conciliation Act, 1996,
            before a sole arbitrator appointed by mutual consent. The language of arbitration shall be English.
          </p>
        </section>

        <section id="governing-law" className="legal-section">
          <h2>17. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by, interpreted, and construed in accordance with the substantive laws of India, without regard to its conflict of law
            principles. Subject to the arbitration clause, the courts situated in <strong>Bengaluru, Karnataka, India</strong> shall have exclusive jurisdiction
            over all disputes arising hereunder.
          </p>
        </section>

        <section id="amendments" className="legal-section">
          <h2>18. Amendments & Updates</h2>
          <p>
            Omni reserves the right to modify, amend, or replace these Terms at any time. When we make material revisions, we will update the &quot;Last Updated&quot;
            date at the top of this page and post a notification in the mobile apps. Your continued access to or use of the Platform following any changes
            signifies your explicit acceptance of the revised Terms.
          </p>
        </section>
      </main>

      <footer className="foot">
        <Link href="/" className="logo">
          <Mark />
          <span>Omni</span>
        </Link>
        <div className="foot-links">
          <Link href="/">Home</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <small>© {new Date().getFullYear()} Omni Technologies Private Limited. All rights reserved.</small>
      </footer>
    </>
  );
}
