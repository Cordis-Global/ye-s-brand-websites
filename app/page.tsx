'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <header className="sticky top-0 z-50 bg-[#071a02]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="text-xl font-black text-white tracking-tight">
              Brands by Ye
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/50">
            <Link
              href="/serene-escapes"
              className="hover:text-[#6fcf4a] transition-colors duration-200"
            >
              Serene Escapes
            </Link>
            <Link
              href="/curated-design"
              className="hover:text-[#2f8f14] transition-colors duration-200"
            >
              Curated Design
            </Link>
            <Link
              href="/photobooth"
              className="hover:text-[#6fcf4a] transition-colors duration-200"
            >
              Photobooth
            </Link>
          </nav>
          <Link
            href="#brands"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2f8f14] hover:bg-[#266f10] text-white text-sm font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#2f8f14]/30"
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      <section className="relative bg-linear-to-br from-[#071a02] via-[#1D4E08] to-[#0a2903] text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-1/4 left-1/5 w-125 h-125 bg-[#2f8f14]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div
          className="absolute bottom-1/4 right-1/5 w-100 h-100 bg-[#6fcf4a]/15 rounded-full blur-[100px] animate-float pointer-events-none"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-0 w-75 h-75 bg-[#1d4e08]/20 rounded-full blur-[80px] animate-float pointer-events-none"
          style={{ animationDelay: '4s' }}
        />

        <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-10 animate-slide-up">
            <Sparkles className="w-4 h-4 text-[#6fcf4a]" />
            <span className="text-sm font-semibold text-white/80 tracking-widest uppercase">
              Experience Luxury Redefined
            </span>
          </div>

          <h1
            className="text-[clamp(4rem,12vw,9rem)] font-black tracking-tight leading-[0.88] mb-8 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="block text-white">Brands</span>
            <span className="block bg-linear-to-r from-[#2f8f14] via-[#6fcf4a] to-[#2f8f14] bg-clip-text text-transparent animate-gradient">
              by Ye
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/55 max-w-xl mx-auto mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Curated luxury experiences — serene retreats, bespoke design, and
            premium photobooth moments.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="#brands"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2f8f14] hover:bg-[#266f10] text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-[0_20px_50px_rgba(47,143,20,0.45)] hover:-translate-y-1"
            >
              Explore Collections
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/serene-escapes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/18 border border-white/20 text-white rounded-2xl font-bold text-base transition-all duration-300 backdrop-blur-sm"
            >
              Book a Stay
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
            <div className="w-px h-10 bg-linear-to-b from-white/0 via-white/30 to-white/0 rounded-full" />
          </div>
        </div>
      </section>

      <div className="bg-[#2f8f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/25">
            {[
              { value: '50+', label: 'Luxury Properties' },
              { value: '200+', label: 'Design Projects' },
              { value: '1000+', label: 'Events Captured' },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-4"
              >
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-white/70 font-semibold mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className="py-24 sm:py-32 bg-background"
        id="brands"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2f8f14] mb-4">
              Our Brands
            </p>
            <h2 className="text-4xl sm:text-6xl font-black text-foreground leading-tight">
              Three Worlds,
              <br className="hidden sm:block" />{' '}
              <span className="bg-linear-to-r from-[#1D4E08] to-[#2f8f14] bg-clip-text text-transparent">
                One Vision
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link
              href="/serene-escapes"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1D4E08] via-[#235e0a] to-[#0a2903] p-8 min-h-130 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(29,78,8,0.55)]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#6fcf4a]/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#2f8f14]/10 rounded-full -ml-12 -mb-12 blur-2xl" />
                <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8 inline-flex p-3 bg-white rounded-2xl shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="/icons/serene-white.jpeg"
                      alt="Serene Escapes"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35 mb-4">
                    Collection 01
                  </p>
                  <h3 className="text-4xl font-black text-white leading-tight mb-1">
                    Serene
                    <br />
                    Escapes
                  </h3>
                  <p className="text-xs font-bold text-[#6fcf4a] uppercase tracking-widest mb-6">
                    by Ye
                  </p>
                  <p className="text-white/55 leading-relaxed text-sm max-w-65">
                    Handpicked luxury vacation rentals — tranquil spaces crafted
                    for discerning travelers.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/15">
                  <span className="text-white font-bold text-sm">
                    Explore Properties
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2f8f14] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/curated-design"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#2f8f14] via-[#2a7d12] to-[#1d4e08] p-8 min-h-130 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(47,143,20,0.55)]">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#6fcf4a]/30 rounded-full -ml-24 -mt-24 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 w-44 h-44 bg-white/8 rounded-full -mr-12 -mb-12 blur-2xl" />
                <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8 inline-flex p-3 bg-white rounded-2xl shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="/icons/curated-white.jpeg"
                      alt="Curated Design"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35 mb-4">
                    Collection 02
                  </p>
                  <h3 className="text-4xl font-black text-white leading-tight mb-1">
                    Curated
                    <br />
                    Design
                  </h3>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-6">
                    by Ye
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm max-w-65">
                    Bespoke graphic design services — from greeting cards to
                    personalised merchandise.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/20">
                  <span className="text-white font-bold text-sm">
                    View Portfolio
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#2f8f14] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/photobooth"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1d4e08] via-[#184107] to-[#0a2903] p-8 min-h-130 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(29,78,8,0.55)]">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#6fcf4a]/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#2f8f14]/10 rounded-full -ml-12 -mb-12 blur-2xl" />
                <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8 inline-flex p-3 bg-white rounded-2xl shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="/icons/photo-booth-white.jpeg"
                      alt="Photobooth"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/35 mb-4">
                    Collection 03
                  </p>
                  <h3 className="text-4xl font-black text-white leading-tight mb-1">
                    Photo
                    <br />
                    booth
                  </h3>
                  <p className="text-xs font-bold text-[#6fcf4a] uppercase tracking-widest mb-6">
                    by Ye
                  </p>
                  <p className="text-white/55 leading-relaxed text-sm max-w-65">
                    Premium photobooth experiences — capture unforgettable
                    moments at your next event.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/15">
                  <span className="text-white font-bold text-sm">Book Now</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#6fcf4a] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0a2903] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-linear-to-br from-[#0d2e04] to-[#071a02] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2f8f14]/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2f8f14] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              The Brands by Ye <span className="text-[#2f8f14]">Promise</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Every detail considered, every experience elevated to meet our
              exacting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '✦',
                title: 'Curated Selection',
                desc: 'Handpicked properties and services that meet our exacting standards.',
              },
              {
                icon: '◈',
                title: 'Attention to Detail',
                desc: 'Every element designed with precision for the perfect experience.',
              },
              {
                icon: '◎',
                title: '24/7 Support',
                desc: 'Dedicated assistance to ensure your satisfaction at every step.',
              },
              {
                icon: '❋',
                title: 'Luxury Promise',
                desc: 'Premium quality and exceptional service across all our collections.',
              },
              {
                icon: '◆',
                title: 'Creative Excellence',
                desc: 'Bespoke solutions tailored to your unique vision and needs.',
              },
              {
                icon: '★',
                title: 'Memorable Moments',
                desc: 'Create and capture experiences that last a lifetime.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-[#2f8f14]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl text-[#2f8f14] mb-4 block">
                  {f.icon}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#2f8f14] transition-colors">
                  {f.title}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#040f02] border-t border-white/8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-black text-white mb-4">
                Brands by Ye
              </h4>
              <p className="text-sm text-white/35 leading-relaxed">
                Luxury experiences and bespoke creative services for modern
                living.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-5">
                Collections
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    label: 'Serene Escapes',
                    href: '/serene-escapes',
                    color: 'hover:text-[#6fcf4a]',
                  },
                  {
                    label: 'Curated Design',
                    href: '/curated-design',
                    color: 'hover:text-[#2f8f14]',
                  },
                  {
                    label: 'Photobooth',
                    href: '/photobooth',
                    color: 'hover:text-[#6fcf4a]',
                  },
                  {
                    label: 'Admin',
                    href: '/admin',
                    color: 'hover:text-white/70',
                  },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`text-sm text-white/35 ${l.color} transition-colors flex items-center gap-2 group`}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-5">
                Connect
              </h4>
              <p className="text-sm text-white/35 leading-relaxed">
                Have questions? Reach out through your preferred brand section
                or contact us via WhatsApp.
              </p>
            </div>
          </div>
          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/25">
            <p>&copy; 2024-2025 Brands by Ye. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 tracking-widest font-semibold">
              Luxury · Creative · Curated
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
