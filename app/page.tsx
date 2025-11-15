import Image from "next/image";
import type { ReactElement, SVGProps } from "react";
import type { StaticImageData } from "next/image";
import femaleHausa from "./assets/female_hausa_portrait.png";
import maleIgbo from "./assets/male_igbo_profile_full.png";
import lightBulbIdea from "./assets/light-bulb-idea.png";
import dualArrowsIcon from "./assets/dual-arrows-icon.png";
import headphoneBehindCardIcon from "./assets/headphone-behind-card-icon.png";
import switchIcon from "./assets/switch-icon.png";
import igboAndNativeWomen from "./assets/igbo-andnative-women.png";
import hausaAndNativeWomen from "./assets/hausa-and-native-women.png";
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
          {/* <a href="/auth/demo" className="hover:text-zinc-900">Auth Demo</a> */}
        </nav>
        <a href="/auth/signup" className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700">Get Started</a>
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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-green-700 sm:text-3xl">Fun Facts About Speech Tech</h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-zinc-600">
          See how voice technology is transforming communication, learning, and accessibility every day.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {EDUCATION_FACTS.map((fact) => (
          <EducationCard key={fact.title} {...fact} />
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,480px)_1fr] lg:items-center">
          <div className="">
            <h2 className="text-4xl font-bold text-zinc-900 sm:text-5xl lg:text-[52px] lg:leading-tight">
              Voices from the <span className="text-green-600">Community</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600">
              Hear what our members, volunteers, and participants have to say about their journey with Offa Tech Community (OTC).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="rounded-xl bg-green-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-green-700"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="rounded-xl border-2 border-green-600 px-7 py-3.5 text-base font-semibold text-green-700 transition hover:bg-green-50"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"}
              >
                <TestimonialCard
                  {...testimonial}
                  variant={TESTIMONIAL_VARIANTS[index % TESTIMONIAL_VARIANTS.length]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#f5f9f6] py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(280px,360px)_1fr_minmax(280px,360px)]">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl lg:h-96">
            <Image
              src={igboAndNativeWomen}
              alt="Two smiling Nigerian women in traditional attire"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 280px"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 sm:text-4xl lg:text-5xl">
              Let's Bring Nigerian Languages to Life
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-700 sm:text-lg">
              Break language barriers and connect better with voices that sound real, local, and natural. Don't wait — experience it today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#get-started"
                className="rounded-xl bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-green-700"
              >
                Get Started Now
              </a>
              <a
                href="#learn-more"
                className="rounded-xl border-2 border-green-600 px-8 py-3.5 text-base font-semibold text-green-700 transition hover:bg-green-50"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl lg:h-96">
            <Image
              src={hausaAndNativeWomen}
              alt="Two smiling Nigerian individuals in traditional attire"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#34A853] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/20">
                <span className="text-lg font-bold text-white">9L</span>
              </div>
              <span className="text-xl font-bold text-white">9ja Lingo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
              Speak. Understand. Connect.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="transition hover:opacity-80">
                <FacebookIcon className="h-6 w-6 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="transition hover:opacity-80">
                <LinkedInIcon className="h-6 w-6 text-white" />
              </a>
              <a href="#" aria-label="TikTok" className="transition hover:opacity-80">
                <TikTokIcon className="h-6 w-6 text-white" />
              </a>
              <a href="#" aria-label="Email" className="transition hover:opacity-80">
                <MailIcon className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
          <FooterCol title="Features" links={["Text-to-Speech (TTS)", "Speech-to-Text (STT)"]} />
          <FooterCol title="Support" links={["Help Center", "Contact Us", "Documentation"]} />
          <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy"]} />
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/80">
          © {new Date().getFullYear()} 9ja Lingo. All rights reserved
        </div>
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

function EducationCard({ title, description }: EducationFact) {
  return (
    <div className="flex min-h-[340px] flex-col items-center rounded-[32px] bg-[#26A643] px-8 py-12 text-white shadow-[0_22px_45px_rgba(38,166,67,0.35)] lg:px-10">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10">
        <Image src={lightBulbIdea} alt="Light bulb idea icon" width={96} height={150} className="h-auto w-16" />
      </div>
      <div className="mt-6 h-10 w-px rounded-full bg-white/30" />
      <div className="mt-auto w-full rounded-3xl bg-white px-7 py-6 text-center text-green-700 shadow-[0_18px_35px_rgba(15,15,15,0.08)] lg:px-8">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-green-800/80">{description}</p>
      </div>
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
  );
}

function TestimonialCard({ name, role, quote, variant, avatar }: TestimonialCardProps) {
  return (
    <div className={`flex items-start gap-4 rounded-[28px] border border-green-200 px-6 py-6 shadow-sm ${variant.container}`}>
      <div className="shrink-0">
        <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-zinc-200">
          {avatar ? (
            <Image src={avatar} alt={name} width={56} height={56} className="h-full w-full object-cover" />
          ) : (
            <span className="text-sm font-semibold text-zinc-600">{name.charAt(0)}</span>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className={`text-sm font-semibold ${variant.heading}`}>
          {name} — <span className={`font-normal ${variant.role}`}>{role}</span>
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${variant.body}`}>{quote}</p>
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
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-white/90">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacebookIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function MailIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
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

const EDUCATION_FACTS: EducationFact[] = [
  {
    title: "We Hear Faster Than We Read",
    description: "Our brains process speech 40% faster than text — making TTS perfect for learning, accessibility, and multitasking.",
  },
  {
    title: "We Hear Faster Than We Read",
    description: "Our brains process speech 40% faster than text — making TTS perfect for learning, accessibility, and multitasking.",
  },
  {
    title: "We Hear Faster Than We Read",
    description: "Our brains process speech 40% faster than text — making TTS perfect for learning, accessibility, and multitasking.",
  },
  {
    title: "We Hear Faster Than We Read",
    description: "Our brains process speech 40% faster than text — making TTS perfect for learning, accessibility, and multitasking.",
  },
];

const TESTIMONIAL_VARIANTS: TestimonialVariant[] = [
  {
    container: "bg-[#e8f7ee]",
    heading: "text-[#145c32]",
    role: "text-[#2d8b52]",
    body: "text-[#145c32]/80",
  },
  {
    container: "bg-[#f0faf3]",
    heading: "text-[#124f2c]",
    role: "text-[#2a7a49]",
    body: "text-[#124f2c]/80",
  },
  {
    container: "bg-[#e9f5f0]",
    heading: "text-[#145339]",
    role: "text-[#2d7a55]",
    body: "text-[#145339]/80",
  },
  {
    container: "bg-[#f3fbf6]",
    heading: "text-[#12482b]",
    role: "text-[#2a6f47]",
    body: "text-[#12482b]/80",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Tunde",
    role: "Volunteer Coordinator",
    quote: "Volunteering at OTC changed my outlook. I developed leadership skills and made lasting connections.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Zaynab",
    role: "Backend Dev Intern",
    quote: "OTC gave me the space to grow as a developer. The mentorship was practical and results‑driven.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
  },
  {
    name: "Kareem",
    role: "UI Designer",
    quote: "Joining OTC helped me find clarity in my tech path. I went from confused to confident in just a few weeks!",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
  },
  {
    name: "Fatimah",
    role: "Data Analyst Intern",
    quote: "OTC gave me the confidence to speak, share ideas, and break into tech. I finally felt seen and supported.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
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
  avatar?: string;
}

interface EducationFact {
  title: string;
  description: string;
}

interface TestimonialVariant {
  container: string;
  heading: string;
  role: string;
  body: string;
}

interface TestimonialCardProps extends Testimonial {
  variant: TestimonialVariant;
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


