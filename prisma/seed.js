import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // 1. Seed Settings
  await prisma.setting.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      general: {
        siteName: "City Psychology",
        siteTitle: "City Psychology | Integrated Therapy & Psychiatric Care in West Palm Beach",
        tagline: "Where clinical excellence meets coastal serenity.",
        logoText: "CP",
        logoUrl: "",
        faviconUrl: "",
        contactEmail: "dillon@citypsychologypb.com",
        phone: "561-537-5586",
        phoneRaw: "5615375586",
        addressLine1: "1818 S Australian Ave, Suite 404",
        addressLine2: "West Palm Beach, FL 33409",
        city: "West Palm Beach",
        state: "FL",
        zip: "33409",
        hours: "Monday – Saturday: By Appointment",
        hoursNote: "Office & Telehealth sessions available. Flexible scheduling to accommodate your needs.",
        emergencyNote: "If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8871638209214!2d-80.076329!3d26.684074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5dfd978a57d%3A0xe5ec9ee6e06b9dc3!2s1818%20S%20Australian%20Ave%20%23404%2C%20West%20Palm%20Beach%2C%20FL%2033409!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      },
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      footer: {
        aboutSummary: "Elevating mental health care in West Palm Beach with an integrated approach combining therapy and psychiatric services.",
        copyright: "© {year} City Psychology PB. All rights reserved.",
        license: "Licensed Mental Health Counselor · West Palm Beach, FL"
      },
      seo: {
        metaTitle: "City Psychology | Premier Mental Health Care in West Palm Beach",
        metaDescription: "Integrated therapy and psychiatric care in West Palm Beach, FL. Personalized evidence-based mental health services for individuals, adolescents, couples, and families.",
        metaKeywords: "psychology, therapy, mental health, west palm beach, counseling, psychiatry, EMDR, CBT",
        ogTitle: "City Psychology - Mental Health Care",
        ogDescription: "Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care in West Palm Beach.",
        ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
        canonicalUrl: "https://citypsychologypb.com"
      }
    }
  });

  // 2. Seed Admin
  await prisma.admin.upsert({
    where: { id: 'admin' },
    update: {
      email: 'admin@citypsychology.com',
      username: 'Admin',
      password: 'admin123',
      pin: '1234',
    },
    create: {
      id: 'admin',
      email: 'admin@citypsychology.com',
      username: 'Admin',
      password: 'admin123',
      pin: '1234',
    },
  });

  // 3. Seed Homepage Sections
  const homeSections = [
    {
      id: 'hero',
      enabled: true,
      data: {
        tag: "West Palm Beach, Florida",
        title: "The New Standard\nof Mental\nArchitecture",
        description: "Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care designed for your flourishing.",
        ctaButtonText: "Begin Your Journey",
        ctaButtonLink: "/contact",
        secondaryButtonText: "Explore Services",
        secondaryButtonLink: "/services",
        bgImageUrl: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
        imageAlt: "Modern therapy office with natural light"
      }
    },
    {
      id: 'intro',
      enabled: true,
      data: {
        tag: "Our Philosophy",
        heading: "A sanctuary for modern minds",
        body1: "In a world that constantly demands more of your attention and energy, City Psychology provides a dedicated space to pause, reflect, and rebuild. We believe mental wellness is not merely the absence of distress, but the foundation for a vibrant, purposeful life.",
        body2: "Our practice bridges the gap between traditional clinical therapy and modern psychiatric medicine. We tailor every treatment plan to the individual, honoring the complexity of your personal journey with evidence-based methods and deep empathy."
      }
    },
    {
      id: 'servicesPreview',
      enabled: true,
      data: {
        tag: "Clinical Services",
        heading: "Comprehensive care for mind and life",
        description: "A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs.",
        buttonText: "Explore All Services",
        buttonLink: "/services"
      }
    },
    {
      id: 'integratedCare',
      enabled: true,
      data: {
        tag: "Integrated Approach",
        heading: "Therapy & Psychiatry in Harmony",
        description: "Most mental health practices operate in silos — therapists on one side, psychiatrists on another. At City Psychology, our clinicians collaborate closely to provide unified care.",
        feature1Title: "Coordinated Treatment Plans",
        feature1Desc: "Your therapist and medical provider communicate continuously to align medication management with psychotherapeutic goals.",
        feature2Title: "Evidence-Based Modalities",
        feature2Desc: "We combine CBT, EMDR, psychodynamic, and lifestyle interventions for sustainable, whole-person healing."
      }
    },
    {
      id: 'teamPreview',
      enabled: true,
      data: {
        tag: "Our Clinicians",
        heading: "Expertise rooted in compassion",
        description: "Meet our licensed therapists and providers committed to guiding you through life's most meaningful transitions.",
        buttonText: "Meet the Team",
        buttonLink: "/team"
      }
    },
    {
      id: 'testimonials',
      enabled: true,
      data: {
        tag: "Client Experiences",
        heading: "Stories of healing and growth",
        items: [
          {
            quote: "City Psychology changed my entire perspective on therapy. The environment is calming, professional, and deeply attentive to my individual needs.",
            author: "Client in West Palm Beach",
            tag: "Individual Therapy"
          },
          {
            quote: "The integrated care model made all the difference. Having my therapy and medication coordinated under one roof gave me clarity and confidence.",
            author: "Client in Palm Beach County",
            tag: "Integrated Care"
          }
        ]
      }
    },
    {
      id: 'cta',
      enabled: true,
      data: {
        heading: "Take the first step toward lasting change",
        description: "Start with a complimentary, no-obligation consultation. Let's find the right path forward together.",
        buttonText: "Schedule Consultation",
        buttonLink: "/contact"
      }
    },
    {
      id: 'contact',
      enabled: true,
      data: {}
    }
  ];

  for (const sec of homeSections) {
    await prisma.homePageSection.upsert({
      where: { id: sec.id },
      update: { enabled: sec.enabled, data: sec.data },
      create: { id: sec.id, enabled: sec.enabled, data: sec.data }
    });
  }

  // 4. Seed Dynamic Pages (Services, Team, About, FAQ)
  const dynamicPages = [
    {
      id: "page_services",
      title: "Our Services",
      slug: "services",
      subtitle: "Comprehensive Care",
      status: "active",
      showInNavbar: true,
      navOrder: 1,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png",
      imageAlt: "City Psychology Services Overview",
      imageTitle: "Comprehensive Mental Health Services",
      metaTitle: "Our Services | City Psychology West Palm Beach",
      metaDescription: "Explore our evidence-based counseling services: Individual, Adolescent, Couples, Family, Group, Trauma & EMDR, Addiction, and Christian Counseling.",
      metaKeywords: "counseling services, therapy, EMDR, CBT, couples counseling, trauma therapy west palm beach",
      canonicalUrl: "https://citypsychologypb.com/services",
      ogTitle: "Our Services - City Psychology",
      ogDescription: "A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png",
      contentHtml: `<!-- Services Hero Banner -->
<section class="relative pt-36 pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-100">
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-sky-600 font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
      Comprehensive Care
    </p>
    <h1 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
      Our Services
    </h1>
    <p class="text-slate-600 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
      A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs from individual therapy to integrated psychiatric care.
    </p>
  </div>
</section>

<!-- Services Grid Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 1. Individual Counseling -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">🧠</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Individual Counseling</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Life can be full of anxiety, dead-end situations, or feelings of emptiness. Our evidence-based individual therapy helps you navigate challenges with CBT, EMDR, and psychodynamic approaches tailored to your unique story.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Cognitive Behavioral (CBT)</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">EMDR</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Psychodynamic</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Solution-Focused</span>
          </div>
        </div>
      </div>

      <!-- 2. Adolescent Counseling -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">👶</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Adolescent Counseling</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Teens face unique challenges: family changes, identity struggles, peer pressure. Unlike adults, they cannot yet draw on past solution strategies. We provide age-appropriate therapeutic support including play therapy for younger clients.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Play Therapy</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Family Systems</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Behavioral Intervention</span>
          </div>
        </div>
      </div>

      <!-- 3. Couples Counseling -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">👥</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Couples Counseling</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Even without major problems, routine and boredom can erode partnerships. We help couples rediscover connection, rebuild communication, and navigate conflict with proven therapeutic frameworks.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Interpersonal Therapy</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Family/Marital</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Motivational Interviewing</span>
          </div>
        </div>
      </div>

      <!-- 4. Family Therapy -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">❤️</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Family Therapy</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Family dynamics shape who we are. Our systemic approach addresses the whole family unit, healing patterns that have been passed down and creating healthier ways of relating to one another.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Family Systems</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Interpersonal</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Solution-Focused</span>
          </div>
        </div>
      </div>

      <!-- 5. Trauma & EMDR -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">✨</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Trauma & EMDR</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Specialized trauma recovery using Eye Movement Desensitization and Reprocessing (EMDR) alongside traditional therapeutic modalities for deep, lasting healing from PTSD, abuse, and traumatic experiences.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">EMDR</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Trauma-Focused CBT</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Psychodynamic</span>
          </div>
        </div>
      </div>

      <!-- 6. Addiction Counseling -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300">
        <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6 text-sky-600 text-2xl font-bold">🛡️</div>
        <h3 class="font-serif text-2xl font-bold text-slate-900 mb-4">Addiction Counseling</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Our comprehensive approach to addiction addresses both substance use and underlying mental health conditions, providing a sustainable path toward flourishing.
        </p>
        <div class="pt-4 border-t border-slate-100">
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Approaches</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Motivational Interviewing</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">CBT</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Relapse Prevention</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-16 text-center">
      <p class="text-slate-500 font-sans text-base mb-6">
        Ready to begin? Sessions are $150 with sliding scale options available for eligible clients.
      </p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-sans font-semibold text-sm rounded-full transition-all shadow-lg shadow-sky-600/20">
        Book Your Consultation →
      </a>
    </div>
  </div>
</section>`,
      customCss: ``
    },
    {
      id: "page_team",
      title: "Our Team",
      slug: "team",
      subtitle: "The Roster",
      status: "active",
      showInNavbar: true,
      navOrder: 2,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      imageAlt: "City Psychology Clinical Team",
      imageTitle: "Meet Our Clinicians",
      metaTitle: "Meet Our Team | City Psychology West Palm Beach",
      metaDescription: "Meet our licensed mental health counselors, psychotherapists, and clinical team dedicated to compassionate, evidence-based care in Palm Beach.",
      metaKeywords: "psychologists, therapists, counselors, Dillon Steinman, Palm Beach mental health team",
      canonicalUrl: "https://citypsychologypb.com/team",
      ogTitle: "Meet Our Team - City Psychology",
      ogDescription: "A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      contentHtml: `<!-- Team Hero Banner -->
<section class="relative pt-36 pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-100">
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-sky-600 font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
      The Roster
    </p>
    <h1 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
      Meet Our Team
    </h1>
    <p class="text-slate-600 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
      A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.
    </p>
  </div>
</section>

<!-- Team Providers List Section -->
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-6 space-y-10">
    <!-- Provider 1 -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all">
      <div class="lg:col-span-2 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop" alt="Dillon A. Steinman" class="w-full h-full object-cover" />
      </div>
      <div class="lg:col-span-3 flex flex-col justify-center">
        <p class="text-sky-600 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-2">Founder & Licensed Mental Health Counselor</p>
        <h3 class="font-serif text-3xl font-bold text-slate-900 mb-4">Dillon A. Steinman, LMHC, QS</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          With over two decades of experience across outpatient private practice, youth counseling, foster care trauma, and addiction recovery, Dillon founded City Psychology to provide an integrated standard of clinical excellence and compassionate healing.
        </p>
        <div>
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Specialties</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Youth Counseling</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Family Therapy</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Clinical Supervision</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Trauma Recovery</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Provider 2 -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all">
      <div class="lg:col-span-2 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" alt="Peter Copan" class="w-full h-full object-cover" />
      </div>
      <div class="lg:col-span-3 flex flex-col justify-center">
        <p class="text-sky-600 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-2">Registered Mental Health Counselor Intern</p>
        <h3 class="font-serif text-3xl font-bold text-slate-900 mb-4">Peter Copan</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Peter blends neuroscience insights with ancient wisdom, offering warm hospitality and kindness to help clients break through pain and trauma toward a purposeful, thriving life.
        </p>
        <div>
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Specialties</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Trauma-Informed Therapy</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Neuroscience Approaches</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Self-Discovery</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Provider 3 -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all">
      <div class="lg:col-span-2 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop" alt="Michelle Cook" class="w-full h-full object-cover" />
      </div>
      <div class="lg:col-span-3 flex flex-col justify-center">
        <p class="text-sky-600 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-2">Licensed Mental Health Counselor</p>
        <h3 class="font-serif text-3xl font-bold text-slate-900 mb-4">Michelle Cook, LMHC</h3>
        <p class="text-slate-600 font-sans text-[15px] leading-[1.8] mb-6">
          Michelle specializes in EMDR trauma processing, empowering clients weighed down by past distress to find rapid relief, genuine connection, and practical emotional tools.
        </p>
        <div>
          <p class="text-xs font-sans text-slate-400 font-semibold tracking-wider uppercase mb-3">Specialties</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">EMDR</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Trauma Processing</span>
            <span class="text-xs font-sans text-slate-700 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Faith-Integrated Counseling</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      customCss: ``
    },
    {
      id: "page_about",
      title: "About Us",
      slug: "about",
      subtitle: "Our Story",
      status: "active",
      showInNavbar: true,
      navOrder: 3,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png",
      imageAlt: "City Psychology Office Interior",
      imageTitle: "About City Psychology",
      metaTitle: "About Us | City Psychology West Palm Beach",
      metaDescription: "Learn about City Psychology, our founder Dillon Steinman, our core values, clinical mission, and accepted insurance plans.",
      metaKeywords: "about city psychology, mental health practice west palm beach, therapy values, insurance rates",
      canonicalUrl: "https://citypsychologypb.com/about",
      ogTitle: "About Us - City Psychology",
      ogDescription: "A new standard of mental health care in West Palm Beach where clinical excellence meets coastal serenity.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png",
      contentHtml: `<!-- About Hero Banner -->
<section class="relative pt-36 pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-100">
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-sky-600 font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
      Our Story
    </p>
    <h1 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
      About City Psychology
    </h1>
    <p class="text-slate-600 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
      Where clinical excellence meets coastal serenity in West Palm Beach.
    </p>
  </div>
</section>

<!-- Story & Vision -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6 space-y-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md">
        <img src="https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png" alt="City Psychology Office" class="w-full h-full object-cover" />
      </div>
      <div class="space-y-6">
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-slate-900">A Sanctuary for Clinical Excellence</h2>
        <p class="text-slate-600 font-sans text-[16px] leading-[1.8]">
          City Psychology was founded with a vision: to create a new standard of mental health care in West Palm Beach. Not just another counseling office, but a curated infrastructure for human flourishing where clinical excellence meets coastal serenity.
        </p>
        <p class="text-slate-600 font-sans text-[16px] leading-[1.8]">
          With over a decade of experience in behavioral health, family dynamics, and addiction counseling, our founder recognized that true healing requires more than talk therapy alone. We offer comprehensive, coordinated care under one collaborative roof.
        </p>
      </div>
    </div>

    <!-- Values Grid -->
    <div class="py-12 rounded-3xl bg-slate-50 border border-slate-200/80 p-8 md:p-12">
      <h3 class="font-serif text-3xl font-bold text-slate-900 text-center mb-10">Our Core Values</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Evidence-Based Care</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Every approach is grounded in proven clinical methodologies and ongoing research.</p>
        </div>
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Integrated Treatment</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Therapy and psychiatry working in concert for comprehensive mental wellness.</p>
        </div>
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Client-Centered</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Your unique needs, values, and goals drive every aspect of your treatment plan.</p>
        </div>
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Accessible & Flexible</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Sliding scale options, flexible scheduling, and both in-person and telehealth sessions.</p>
        </div>
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Faith-Compatible</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Integration of Christian values for those who desire a faith-informed approach.</p>
        </div>
        <div class="p-6 rounded-xl border border-slate-200 bg-white shadow-xs">
          <h4 class="font-serif text-lg font-bold text-sky-600 mb-2">Growth-Oriented</h4>
          <p class="text-slate-600 font-sans text-sm leading-relaxed">Building a multi-disciplinary group to serve the Palm Beach community at scale.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
      customCss: ``
    },
    {
      id: "page_faq",
      title: "Frequently Asked Questions",
      slug: "faq",
      subtitle: "Common Questions",
      status: "active",
      showInNavbar: true,
      navOrder: 4,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "",
      imageAlt: "City Psychology FAQ",
      imageTitle: "Frequently Asked Questions",
      metaTitle: "FAQ | City Psychology West Palm Beach",
      metaDescription: "Find answers to frequently asked questions about therapy sessions, rates, insurance coverage, telehealth options, and confidentiality.",
      metaKeywords: "therapy FAQ, counseling questions, insurance accepted, telehealth therapy, West Palm Beach",
      canonicalUrl: "https://citypsychologypb.com/faq",
      ogTitle: "Frequently Asked Questions - City Psychology",
      ogDescription: "Everything you need to know about starting your therapeutic journey with City Psychology.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      contentHtml: `<!-- FAQ Hero Banner -->
<section class="relative pt-36 pb-20 overflow-hidden bg-slate-50/70 border-b border-slate-100">
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-sky-600 font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
      Common Questions
    </p>
    <h1 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
      Frequently Asked Questions
    </h1>
    <p class="text-slate-600 font-sans text-lg leading-relaxed max-w-2xl mx-auto">
      Everything you need to know about starting your therapeutic journey with City Psychology.
    </p>
  </div>
</section>

<!-- FAQ List Section -->
<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-6 space-y-6">
    <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-3">What should I expect during my first visit?</h3>
      <p class="text-slate-600 font-sans text-[15px] leading-[1.8]">
        Your first session begins with a comprehensive assessment where we discuss your history, current challenges, and goals. This helps us create a personalized treatment plan tailored to you.
      </p>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-3">Do you accept insurance?</h3>
      <p class="text-slate-600 font-sans text-[15px] leading-[1.8]">
        Yes, we accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, United Healthcare, Humana, Medicare, and Tricare. We will help verify your benefits beforehand.
      </p>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-3">How much do sessions cost?</h3>
      <p class="text-slate-600 font-sans text-[15px] leading-[1.8]">
        Our standard session rate is $150. We also offer sliding scale options for eligible clients to ensure therapy remains accessible.
      </p>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-3">Do you offer telehealth and online sessions?</h3>
      <p class="text-slate-600 font-sans text-[15px] leading-[1.8]">
        Absolutely. We provide both in-person sessions at our West Palm Beach office and secure, HIPAA-compliant telehealth video sessions.
      </p>
    </div>

    <div class="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all">
      <h3 class="font-serif text-xl font-bold text-slate-900 mb-3">Is everything confidential?</h3>
      <p class="text-slate-600 font-sans text-[15px] leading-[1.8]">
        100% confidential. All records, communications, and sessions are strictly protected under HIPAA regulations and medical ethics standards.
      </p>
    </div>
  </div>
</section>`,
      customCss: ``
    }
  ];

  for (const p of dynamicPages) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      update: p,
      create: p
    });
  }

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
