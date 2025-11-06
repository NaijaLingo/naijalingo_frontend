import Image from "next/image";
import maleIgbo from "./assets/male_igbo_profile_full.png";

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
          <a href="#home" className="hover:text-zinc-900">Home</a>
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
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          <span className="text-green-700">Voices That</span>
          {" "}Speak{" "}
          <span className="text-green-700"> Like You Do</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm text-zinc-600 sm:text-base">
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
          className="h-full w-full rounded-2xl object-cover object-center"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
        {/* <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/20" /> */}
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-16 lg:px-8">
      <div className="rounded-2xl border border-zinc-200 bg-zinc-900 p-4 text-white shadow">
        <div className="mb-3 flex gap-2 text-sm">
          <button className="rounded-md bg-white/10 px-3 py-1.5 font-medium text-white">Text to Speech</button>
          <button className="rounded-md px-3 py-1.5 text-white/60 hover:text-white">Speech to Text</button>
        </div>
        <div className="rounded-lg bg-zinc-800 p-4 text-sm text-zinc-100">
          How you dey? Make we catch up later for evening.
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <SelectPill label="Language" />
          <SelectPill label="Accent" />
          <SelectPill label="Voice" />
          <button aria-label="Play" className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700">▶ Play</button>
        </div>
      </div>
      <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-zinc-100 sm:h-96">
        <div className="absolute inset-0 grid place-items-center text-sm text-zinc-500">
          <span className="rounded-full bg-zinc-200 px-3 py-1">Portrait Image</span>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-center text-2xl font-semibold text-green-700">What Makes 9ja Lingo Different</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-600">Designed for Nigerian voices — accurate, natural, and built to sound like you.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <FeatureCard title="Dual Conversion Mode" description="Switch easily between Speech‑to‑Text and Text‑to‑Speech" />
        <FeatureCard title="Accurate Nigerian Voices" description="Get natural pronunciation and tones that reflect how we really speak" />
        <FeatureCard title="Simple & Fast" description="A clean, modern interface made for everyone" />
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-green-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-zinc-900">Start in 3 Steps</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-600">Designed for Nigerian voices — accurate, natural, and built to sound like you.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ProcessCard step="Step 1" title="Visit the Website" />
          <ProcessCard step="Step 2" title="Choose a Feature" subtitle="Text‑to‑Speech or Speech‑to‑Text" />
          <ProcessCard step="Step 3" title="Speak or Type" />
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

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-10 w-10 rounded-lg bg-green-100" />
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <p className="mt-1 text-sm text-zinc-600">{description}</p>
    </div>
  );
}

function ProcessCard({ step, title, subtitle }: { step: string; title: string; subtitle?: string }) {
  return (
    <div className="rounded-2xl bg-green-600 p-6 text-white shadow">
      <div className="text-xs font-semibold opacity-90">{step}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-white/90">{subtitle}</p> : null}
    </div>
  );
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

function SelectPill({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center justify-between gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">
      {label} <span className="text-white/60">▾</span>
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

// Static content & types
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

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}


