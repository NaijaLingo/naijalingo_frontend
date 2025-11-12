import Image from "next/image";
import type { ReactElement, SVGProps } from "react";
import type { StaticImageData } from "next/image";
import femaleHausa from "./assets/female_hausa_portrait.png";
import maleIgbo from "./assets/male_igbo_profile_full.png";
import dualArrowsIcon from "./assets/dual-arrows-icon.png";
import headphoneBehindCardIcon from "./assets/headphone-behind-card-icon.png";
import switchIcon from "./assets/switch-icon.png";
import { DemoImageCarousel, type DemoCarouselItem } from "./components/demo-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <ProcessSection />
        <EducationSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          <span className="text-sm font-semibold text-zinc-900">9ja Lingo</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-700 sm:flex">
          <a href="#home" className="hover:text-zinc-900 text-green-600">Home</a>
          <a href="#services" className="hover:text-zinc-900">Services</a>
          <a href="#blog" className="hover:text-zinc-900">Blog</a>
          <a href="#about" className="hover:text-zinc-900">About us</a>
        </nav>
        <a href="#get-started" className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700">Get Started</a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16 lg:px-8">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-600/30 px-3 py-1 text-xs font-medium text-green-700">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" /> Top Nigerian
        </div>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          <span className="text-green-700">Voices That</span> <br />
          {" "}Speak{" "}
          <span className="text-green-700"> Like <br /> You Do</span>
        </h1>
        <p className="mt-4 max-w-sm text-sm text-zinc-600 sm:text-base">
          Finally, a tool that understands Nigerian languages with accurate pronunciation, natural flow, and voices that feel authentic.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#get-started" className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700">Get Started</a>
          <a href="#learn-more" className="rounded-md border border-green-200 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50">Learn More</a>
        </div>
      </div>
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-zinc-200 sm:h-[360px] lg:h-[420px]">
        <Image
          src={maleIgbo}
          alt="Smiling Nigerian man in traditional attire"
          priority
          className="h-full w-[90%] rounded-2xl  object-center object-cover mx-auto"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
        {/* <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/20" /> */}
      </div>
    </section>
  );
}

function DemoSection() {
  const carouselItems: DemoCarouselItem[] = [
    {
      alt: "Smiling Hausa woman in traditional attire",
      src: femaleHausa,
    },
    {
      alt: "Smiling Igbo man in traditional attire",
      src: maleIgbo,
    },
  ];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#212121] px-6 pb-8 pt-6 text-white shadow-[0_35px_80px_rgba(12,12,12,0.45)] sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex flex-col">
            <div className="inline-flex w-max rounded-[20px] bg-[#2d2d2d] p-1">
              <button className="rounded-[16px] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-900 shadow-sm">Text to Speech</button>
              <button className="rounded-[16px] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/50 transition hover:text-white/80">Speech to Text</button>
            </div>
            <div className="mt-6 flex-1 rounded-[24px] border border-white/5 bg-[#2b2b2b] px-6 py-10 text-lg leading-relaxed text-white/90 shadow-inner">
              <p>How you dey? Make we catch up later for evening.</p>
            </div>
            <div className="mt-8 grid grid-cols-[repeat(3,minmax(120px,1fr))_72px] gap-4">
              <SelectPill label="Language" value="Language" />
              <SelectPill label="Accent" value="Accent" />
              <SelectPill label="Voice" value="Voice" />
              <PlayButton />
            </div>
          </div>
          <div className="hidden lg:block">
            <DemoImageCarousel items={carouselItems} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/40 to-transparent" />
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-green-700 sm:text-3xl">What Makes 9ja Lingo Different</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600">
          Designed for Nigerian voices — accurate, natural, and built to sound like you.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-14 text-center sm:grid-cols-3">
        {FEATURE_ITEMS.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#e6f5ea] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-700 sm:text-3xl">Start in 3 Steps</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-green-800/70">
            Designed for Nigerian voices — accurate, natural, and built to sound like you.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <ProcessCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-semibold text-zinc-900">Fun Facts About Speech Tech</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-600">See how voice technology is transforming communication, learning, and accessibility every day.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-green-200 bg-green-600 p-6 text-white shadow">
            <div className="mb-4 h-8 w-8 rounded-full bg-white/20" />
            <p className="text-sm leading-relaxed text-white/90">
              Our brains process speech faster than we read — making TTS perfect for learning, accessibility, and multitasking.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-zinc-900">Voices from the <span className="text-green-700">Community</span></h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600">Hear what our members, volunteers, and participants have to say.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
      <div className="mt-8 flex gap-3">
        <a href="#get-started" className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700">Get Started</a>
        <a href="#learn-more" className="rounded-md border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">Learn More</a>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-green-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h3 className="text-2xl font-semibold text-green-700">Let’s Bring Nigerian Languages to Life</h3>
          <p className="mt-2 max-w-xl text-sm text-zinc-700">
            Break language barriers and connect better with voices that sound real, local, and natural. Don’t wait — experience it today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#get-started" className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700">Get Started Now</a>
            <a href="#learn-more" className="rounded-md border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">Learn More</a>
          </div>
        </div>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-zinc-100 sm:h-72">
          <div className="absolute inset-0 grid place-items-center text-sm text-zinc-500">
            <span className="rounded-full bg-zinc-200 px-3 py-1">Group Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-sm font-semibold text-zinc-900">9ja Lingo</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-600">Speak. Understand. Connect.</p>
            <div className="mt-4 flex items-center gap-3 text-zinc-500">
              <IconCircle label="Twitter" />
              <IconCircle label="LinkedIn" />
              <IconCircle label="Pinterest" />
              <IconCircle label="Email" />
            </div>
          </div>
          <FooterCol title="Features" links={["Text‑to‑Speech (TTS)", "Speech‑to‑Text (STT)"]} />
          <FooterCol title="Support" links={["Help Center", "Contact Us", "Documentation"]} />
          <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy"]} />
        </div>
        <p className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} 9ja Lingo. All rights reserved</p>
      </div>
    </footer>
  );
}

function FeatureCard({ title, description, icon }: FeatureItem) {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#26A643]/10">
        <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className="h-auto w-12" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-green-700">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
}

function ProcessCard({ stepLabel, title, description, Icon }: ProcessStep) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative min-h-[420px] rounded-[56px] bg-[#29a75b] px-10 pb-16 pt-20 text-center text-white shadow-[0_30px_60px_rgba(41,167,91,0.35)]">
        <span aria-hidden className="absolute -top-10 right-0 h-24 w-24 rounded-bl-[72px] bg-[#e6f5ea]" />
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-green-600">
          <Icon className="h-14 w-14" />
        </div>
        <h3 className="relative mt-10 text-xl font-semibold">{title}</h3>
        <p className="relative mx-auto mt-5 max-w-[220px] text-sm leading-relaxed text-white/85">{description}</p>
      </div>
      <div className="absolute -top-8 right-10 flex items-center gap-2 rounded-full border border-green-500/60 bg-white px-6 py-2 text-sm font-semibold text-green-600 shadow-[0_6px_18px_rgba(41,167,91,0.25)]">
        <span>{stepLabel}</span>
        <ArrowRightIcon className="h-3.5 w-3.5 text-green-600" />
      </div>
    </div>
  );x
}

function TestimonialCard({ name, role, quote }: Testimonial) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-zinc-200 text-xs text-zinc-600">IMG</div>
      <div>
        <div className="text-sm font-semibold text-zinc-900">{name} — <span className="font-normal text-zinc-600">{role}</span></div>
        <p className="mt-1 text-sm text-zinc-700">{quote}</p>
      </div>
    </div>
  );
}

function PlayButton() {
  return (
    <button
      aria-label="Play demo audio"
      className="grid h-14 w-14 place-items-center rounded-full bg-white text-zinc-900 shadow-[0_10px_25px_rgba(15,15,15,0.35)] transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <span className="pl-0.5 text-lg font-semibold">▶</span>
    </button>
  );
}

function SelectPill({ label, value }: SelectPillProps) {
  return (
    <button className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
      <span>{label}</span>
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white/70">
        ▾
      </span>
    </button>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-zinc-600">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-zinc-900">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

function IconCircle({ label }: { label: string }) {
  return (
    <span aria-label={label} className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200 text-xs text-zinc-500">{label[0]}</span>
  );
}

function ArrowRightIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 4.5 3.5 3.5-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" />
      <path d="M6 24h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 6s10 8 10 18-10 18-10 18-10-8-10-18 10-18 10-18Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MicBubbleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="16" y="8" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="3" />
      <path d="M12 24c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 36v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 42h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M33 10h5a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MicDocumentIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M30 6H18a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 18v10c0 2.21 1.79 4 4 4s4-1.79 4-4V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 34v4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 12h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 16h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Static content & types
const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Dual Conversion Mode",
    description: "Switch easily between Speech-to-Text and Text-to-Speech.",
    icon: {
      src: dualArrowsIcon,
      alt: "Dual arrows icon",
      width: 64,
      height: 64,
    },
  },
  {
    title: "Accurate Nigerian Voices",
    description: "Get pronunciation and tones that reflect how we really speak.",
    icon: {
      src: headphoneBehindCardIcon,
      alt: "Headphone and card icon",
      width: 64,
      height: 64,
    },
  },
  {
    title: "Simple & Fast",
    description: "A clean, modern interface made for everyone.",
    icon: {
      src: switchIcon,
      alt: "Simple interface icon",
      width: 64,
      height: 64,
    },
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Tunde",
    role: "Volunteer Coordinator",
    quote: "Volunteering at OTC changed my outlook. I developed leadership skills and made lasting connections.",
  },
  {
    name: "Zaynab",
    role: "Backend Dev Intern",
    quote: "OTC gave me the space to grow as a developer. The mentorship was practical and results‑driven.",
  },
  {
    name: "Kareem",
    role: "UI Designer",
    quote: "Joining OTC helped me find my path in design. I now feel more confident in my skills.",
  },
  {
    name: "Fatimah",
    role: "Data Analyst Intern",
    quote: "OTC gave me the confidence to speak, share ideas, and break into tech. I finally felt seen and supported.",
  },
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    stepLabel: "Step 1",
    title: "Visit the Website",
    description: "Go to the website on any device to get started.",
    Icon: GlobeIcon,
  },
  {
    stepLabel: "Step 2",
    title: "Choose a Feature",
    description: "Select Text-to-Speech (TTS) or Speech-to-Text (STT).",
    Icon: MicBubbleIcon,
  },
  {
    stepLabel: "Step 3",
    title: "Speak or Type",
    description: "Say something or enter text, and get instant output.",
    Icon: MicDocumentIcon,
  },
];

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface SelectPillProps {
  label: string;
  value: string;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: FeatureIcon;
}

interface FeatureIcon {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface ProcessStep {
  stepLabel: string;
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}


