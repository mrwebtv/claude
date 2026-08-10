import {
  Check,
  ChevronRight,
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

import { Navbar1 } from "@/components/sections/Navbar1";
import { Header1 } from "@/components/sections/Header1";
import { Logo1 } from "@/components/sections/Logo1";
import { Layout237 } from "@/components/sections/Layout237";
import { Layout218 } from "@/components/sections/Layout218";
import { Stats8 } from "@/components/sections/Stats8";
import { Timeline9 } from "@/components/sections/Timeline9";
import { Pricing23 } from "@/components/sections/Pricing23";
import { Testimonial5 } from "@/components/sections/Testimonial5";
import { Team20 } from "@/components/sections/Team20";
import { Faq1 } from "@/components/sections/Faq1";
import { Cta7 } from "@/components/sections/Cta7";
import { Contact5 } from "@/components/sections/Contact5";
import { Footer1 } from "@/components/sections/Footer1";

const check = <Check className="size-6 text-scheme-text" />;

const socialLinks = [
  { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
  { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
];

export default function Home() {
  return (
    <main>
      <Navbar1
        navLinks={[
          { title: "Services", url: "#services" },
          { title: "About", url: "#about" },
          { title: "Pricing", url: "#pricing" },
          {
            title: "Resources",
            url: "#resources",
            subMenuLinks: [
              { title: "Tax deadline calendar", url: "#resources" },
              { title: "Small business guides", url: "#resources" },
              { title: "Bookkeeping checklist", url: "#resources" },
            ],
          },
        ]}
        buttons={[
          { title: "Client login", variant: "secondary", size: "sm" },
          { title: "Book a consultation", size: "sm" },
        ]}
      />

      <Header1
        heading="Accounting that keeps your business ahead of every deadline"
        description="Halstead & Rowe is a chartered accountancy practice for founders, contractors and growing companies. We handle the bookkeeping, payroll and tax filings so you can spend your time running the business instead of reconciling it."
        buttons={[
          { title: "Book a free consultation" },
          { title: "See our services", variant: "secondary" },
        ]}
      />

      <Logo1
        heading="Accredited, insured and trusted by more than 400 UK businesses"
        logos={[
          { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "ICAEW chartered" },
          { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "ACCA registered" },
          { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "AAT licensed" },
          { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Xero platinum partner" },
          { src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "QuickBooks ProAdvisor" },
          { src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "HMRC agent services" },
        ]}
      />

      <div id="services">
        <Layout237
          tagline="Services"
          heading="Everything your finance function needs, under one roof"
          description="Whether you are filing your first self-assessment or preparing group accounts, you get a named accountant, fixed monthly fees and no surprise invoices."
          sections={[
            {
              heading: "Tax planning & returns",
              description:
                "Corporation tax, self-assessment, VAT and capital gains. We file on time, claim every allowance you are entitled to, and tell you what you owe months before it is due.",
            },
            {
              heading: "Bookkeeping & payroll",
              description:
                "Cloud bookkeeping reconciled weekly, RTI payroll for teams of any size, pension auto-enrolment and CIS returns handled end to end.",
            },
            {
              heading: "Advisory & forecasting",
              description:
                "Management accounts, cash-flow forecasts and board-ready reporting, plus funding and R&D claim support when you are ready to grow.",
            },
          ]}
          buttons={[
            { title: "Book a consultation", variant: "secondary" },
            {
              title: "Compare packages",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ]}
        />
      </div>

      <div id="about">
        <Layout218
          heading="Twenty-two years of getting the numbers right the first time"
          description="We started in 2003 with a single client and a simple promise: no jargon, no missed deadlines, and a straight answer whenever you call. Today our team of eighteen looks after owner-managed businesses across the UK, from sole traders to companies turning over £20m."
          stats={[
            {
              title: "400+",
              description: "Businesses supported across retail, construction, tech and professional services.",
            },
            {
              title: "100%",
              description: "On-time filing record with HMRC and Companies House since 2003.",
            },
          ]}
        />
      </div>

      <Stats8
        heading="The results our clients see in their first year with us"
        stats={[
          { percentage: "£4,800", heading: "Average annual tax saving per client" },
          { percentage: "11 hrs", heading: "Admin time returned to owners each month" },
          { percentage: "4 hrs", heading: "Average response time to any client query" },
        ]}
      />

      <Timeline9
        tagline="How it works"
        heading="Switching accountants takes about a week"
        description="We handle the handover paperwork, chase your previous accountant for records, and register as your agent with HMRC. You approve two forms and that is it."
        buttons={[
          { title: "Start the switch", variant: "secondary" },
          {
            title: "Talk to an accountant",
            variant: "link",
            size: "link",
            iconRight: <ChevronRight className="text-scheme-text" />,
          },
        ]}
        timelineItems={[
          {
            heading: "Day 1",
            title: "Free consultation",
            description:
              "A 30-minute call to understand your business, your current setup and what is not working. You leave with a fixed quote and a clear scope, whether or not you go ahead.",
            buttons: [{ title: "Book a call", variant: "secondary" }],
          },
          {
            heading: "Day 2",
            title: "Handover and authorisation",
            description:
              "You sign a short letter of engagement and an HMRC agent authorisation. We write to your previous accountant for professional clearance and collect your records directly from them.",
            buttons: [],
          },
          {
            heading: "Week 1",
            title: "Setup and clean-up",
            description:
              "We migrate your bookkeeping to Xero or QuickBooks, reconcile the open period, and flag anything from prior years that needs correcting before your next filing.",
            buttons: [],
          },
          {
            heading: "Ongoing",
            title: "Monthly reporting and filings",
            description:
              "Management accounts by the tenth of each month, VAT and payroll filed on schedule, and a quarterly review call with your named accountant to plan ahead.",
            buttons: [{ title: "See what is included", variant: "secondary" }],
          },
        ]}
      />

      <div id="pricing">
        <Pricing23
          tagline="Pricing"
          heading="Fixed monthly fees, no hourly billing"
          description="Every package includes your filings, your software licence and unlimited email support. Prices exclude VAT."
          defaultTabValue="monthly"
          tabs={[
            {
              value: "monthly",
              tabName: "Monthly",
              plans: [
                {
                  planName: "Sole trader",
                  price: "£95",
                  features: [
                    { icon: check, text: "Self-assessment return filed" },
                    { icon: check, text: "Quarterly bookkeeping review" },
                    { icon: check, text: "MTD-compliant software licence" },
                    { icon: check, text: "Unlimited email support" },
                  ],
                  button: { title: "Get started" },
                },
                {
                  planName: "Limited company",
                  price: "£240",
                  features: [
                    { icon: check, text: "Year-end accounts and CT600" },
                    { icon: check, text: "Quarterly VAT returns" },
                    { icon: check, text: "Payroll for up to five employees" },
                    { icon: check, text: "Confirmation statement filed" },
                    { icon: check, text: "Named accountant and quarterly call" },
                  ],
                  button: { title: "Get started" },
                },
                {
                  planName: "Growth",
                  price: "£560",
                  features: [
                    { icon: check, text: "Everything in Limited company" },
                    { icon: check, text: "Monthly management accounts" },
                    { icon: check, text: "Rolling 12-month cash-flow forecast" },
                    { icon: check, text: "Payroll for up to twenty-five employees" },
                    { icon: check, text: "R&D and funding claim support" },
                    { icon: check, text: "Board reporting pack" },
                  ],
                  button: { title: "Get started" },
                },
              ],
            },
            {
              value: "yearly",
              tabName: "Yearly",
              plans: [
                {
                  planName: "Sole trader",
                  price: "£1,026",
                  discount: "Save 10%",
                  features: [
                    { icon: check, text: "Self-assessment return filed" },
                    { icon: check, text: "Quarterly bookkeeping review" },
                    { icon: check, text: "MTD-compliant software licence" },
                    { icon: check, text: "Unlimited email support" },
                  ],
                  button: { title: "Get started" },
                },
                {
                  planName: "Limited company",
                  price: "£2,592",
                  discount: "Save 10%",
                  features: [
                    { icon: check, text: "Year-end accounts and CT600" },
                    { icon: check, text: "Quarterly VAT returns" },
                    { icon: check, text: "Payroll for up to five employees" },
                    { icon: check, text: "Confirmation statement filed" },
                    { icon: check, text: "Named accountant and quarterly call" },
                  ],
                  button: { title: "Get started" },
                },
                {
                  planName: "Growth",
                  price: "£6,048",
                  discount: "Save 10%",
                  features: [
                    { icon: check, text: "Everything in Limited company" },
                    { icon: check, text: "Monthly management accounts" },
                    { icon: check, text: "Rolling 12-month cash-flow forecast" },
                    { icon: check, text: "Payroll for up to twenty-five employees" },
                    { icon: check, text: "R&D and funding claim support" },
                    { icon: check, text: "Board reporting pack" },
                  ],
                  button: { title: "Get started" },
                },
              ],
            },
          ]}
        />
      </div>

      <Testimonial5
        heading="What our clients say"
        description="Owner-managed businesses that moved to Halstead & Rowe in the last three years."
        testimonials={[
          {
            numberOfStars: 5,
            quote:
              '"We had missed two VAT deadlines before we switched. Halstead & Rowe cleaned up eighteen months of records, negotiated the penalties down, and we have not missed a filing since. The monthly accounts actually get read now."',
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Priya Nandakumar",
            },
            name: "Priya Nandakumar",
            position: "Founder, Kesteven Interiors",
            logo: {
              src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
              alt: "Kesteven Interiors logo",
            },
          },
          {
            numberOfStars: 5,
            quote:
              '"The R&D claim alone paid for four years of fees. What I value more is that I can email a question about a contract on a Tuesday and have a proper answer, not a caveat, by Wednesday morning."',
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Daniel Osei",
            },
            name: "Daniel Osei",
            position: "Managing Director, Fieldmark Robotics",
            logo: {
              src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
              alt: "Fieldmark Robotics logo",
            },
          },
        ]}
      />

      <Team20
        tagline="Our team"
        heading="The people who will actually pick up the phone"
        description="You are assigned one accountant and one bookkeeper on day one, and they stay with your account."
        button={{ title: "View open positions", variant: "secondary" }}
        teamMembers={[
          {
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Marianne Halstead",
            },
            name: "Marianne Halstead",
            jobTitle: "Founding Partner, FCA",
            description:
              "Twenty-eight years in practice, specialising in corporate tax and business restructuring for owner-managed companies.",
            socialLinks,
          },
          {
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Tobias Rowe",
            },
            name: "Tobias Rowe",
            jobTitle: "Partner, ACA",
            description:
              "Leads the advisory team on forecasting, funding rounds and R&D tax relief claims for technology and manufacturing clients.",
            socialLinks,
          },
          {
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Aisha Kowalczyk",
            },
            name: "Aisha Kowalczyk",
            jobTitle: "Head of Tax",
            description:
              "Handles complex VAT, capital gains and property tax cases, and represents clients in HMRC enquiries.",
            socialLinks,
          },
          {
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Portrait of Callum Byrne",
            },
            name: "Callum Byrne",
            jobTitle: "Payroll & Bookkeeping Manager",
            description:
              "Runs payroll for over 2,000 employees each month and manages our Xero and QuickBooks migrations.",
            socialLinks,
          },
        ]}
      />

      <Faq1
        heading="FAQs"
        description="The questions we are asked most often on a first call. If yours is not here, send it over and we will answer it directly."
        questions={[
          {
            title: "How much will it cost me to switch?",
            answer:
              "Nothing. We do not charge a setup or onboarding fee. Your first monthly invoice is issued once your records have been migrated and we have confirmed the scope in writing. If your previous accountant charges a handover fee, that is between you and them, but in our experience it is rare.",
          },
          {
            title: "Can I switch part-way through my financial year?",
            answer:
              "Yes, and most clients do. We request professional clearance from your outgoing accountant, take over from the last reconciled period, and pick up the filings that fall due after the handover. Nothing needs to wait for your year-end.",
          },
          {
            title: "Do I have to use specific accounting software?",
            answer:
              "We work in Xero and QuickBooks, and your licence is included in every package. If you are currently on Sage, FreeAgent or spreadsheets, we handle the migration at no extra cost during onboarding.",
          },
          {
            title: "What happens if HMRC opens an enquiry?",
            answer:
              "We correspond with HMRC on your behalf as your registered agent and prepare the response. Enquiry representation is included for clients on the Limited company and Growth packages, and is available to sole traders for a fixed fee agreed before any work starts.",
          },
          {
            title: "Are your fees really fixed?",
            answer:
              "Yes. Your monthly fee covers everything in your package plus unlimited email and phone support. We only re-quote if the scope changes materially, for example if you take on payroll for a much larger team, and we agree the new fee with you before the work begins.",
          },
        ]}
        footerHeading="Still have questions?"
        footerDescription="Speak to a chartered accountant, not a call centre. We usually reply within four working hours."
        button={{ title: "Contact us", variant: "secondary" }}
      />

      <Cta7
        heading="Find out what you should be paying in tax"
        description="Book a free 30-minute consultation. You will get a fixed quote and a review of your current filings, with no obligation to switch."
        buttons={[
          { title: "Book a free consultation" },
          { title: "Call 020 7946 0812", variant: "secondary" },
        ]}
      />

      <Contact5
        tagline="Get in touch"
        heading="Talk to an accountant"
        description="Send us a note about your business and we will come back with an honest assessment of what we can do and what it would cost."
        email="hello@halsteadrowe.co.uk"
        phone="020 7946 0812"
        address="14 Fenchurch Court, London EC3M 5BQ"
        button={{ title: "Send enquiry" }}
      />

      <Footer1
        newsletterDescription="Monthly tax deadlines, allowance changes and practical guidance for owner-managed businesses. No sales emails."
        inputPlaceholder="Enter your email"
        button={{ title: "Subscribe", variant: "secondary", size: "sm" }}
        termsAndConditions={`
  <p class='text-tiny'>
    By subscribing you agree to our
    <a href='#' class='underline'>Privacy Policy</a>
    and consent to receive updates from Halstead &amp; Rowe.
  </p>
  `}
        columnLinks={[
          {
            title: "Services",
            links: [
              { title: "Tax returns", url: "#services" },
              { title: "Bookkeeping", url: "#services" },
              { title: "Payroll", url: "#services" },
              { title: "Management accounts", url: "#services" },
              { title: "R&D tax relief", url: "#services" },
            ],
          },
          {
            title: "Practice",
            links: [
              { title: "About us", url: "#about" },
              { title: "Our team", url: "#about" },
              { title: "Pricing", url: "#pricing" },
              { title: "Careers", url: "#" },
              { title: "Contact", url: "#" },
            ],
          },
          {
            title: "Follow us",
            links: [
              { title: "LinkedIn", url: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
              { title: "X", url: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
              { title: "Facebook", url: "#", icon: <FacebookLogo className="size-6 text-scheme-text" /> },
              { title: "YouTube", url: "#", icon: <YoutubeLogo className="size-6 text-scheme-text" /> },
            ],
          },
        ]}
        footerText="© 2026 Halstead & Rowe Chartered Accountants. Registered in England & Wales, company no. 04871220."
        footerLinks={[
          { title: "Privacy Policy", url: "#" },
          { title: "Terms of Service", url: "#" },
          { title: "Cookies Settings", url: "#" },
        ]}
      />
    </main>
  );
}
