import { ArrowRight } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden selection:bg-black selection:text-white">
      <header className="sticky top-0 z-50 bg-black border-b-2 border-white/10 backdrop-blur-md">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-white transition-colors duration-300">
              Brands by Ye
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-white/70">
            <Link
              href="/serene-escapes"
              className="hover:text-white transition-colors duration-200"
            >
              Serene Escapes
            </Link>
            <Link
              href="/curated-design"
              className="hover:text-white transition-colors duration-200"
            >
              Curated Design
            </Link>
            <Link
              href="/photobooth"
              className="hover:text-white transition-colors duration-200"
            >
              Photobooth
            </Link>
          </nav>
          <Link
            href="#brands"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest btn-capsule hover:bg-black hover:text-white border-2 border-white"
          >
            Explore
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <section className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center border-b-2 border-white/10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        >
          <source
            src="/bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none z-0" />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-24 sm:py-32 w-full flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full border-2 border-white/60 mb-12 animate-slide-up">
            <Image
              src="/icons/brands-by-ye.svg"
              alt="Brands by Ye logo"
              width={28}
              height={28}
              className="invert"
            />
            <span className="text-xs font-bold text-white tracking-[0.3em] uppercase">
              Created to Curate
            </span>
          </div>

          <h1
            className="text-[clamp(4.5rem,14vw,12rem)] font-black tracking-tighter leading-[0.85] mb-10 w-full animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="block text-white uppercase">Brands</span>
            <span className="block text-white uppercase">by Ye</span>
          </h1>

          <p
            className="text-lg sm:text-2xl font-medium text-white/70 max-w-3xl mx-auto mb-14 leading-snug animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Curated luxury experiences: serene homes for long and short stays,
            bespoke customised designs and premium photobooth rentals.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="#brands"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black btn-capsule text-sm hover:scale-105 border-2 border-white hover:bg-black hover:text-white"
            >
              Explore Collections
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/serene-escapes"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-transparent border-2 border-white text-white btn-capsule text-sm hover:bg-white hover:text-black"
            >
              Book a Stay
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white text-black border-b-2 border-black/10">
        <div className="max-w-screen-2xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center md:divide-x-2 md:divide-black/20">
            {[
              { value: '50+', label: 'Luxury Properties' },
              { value: '200+', label: 'Design Projects' },
              { value: '1000+', label: 'Events Captured' },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-6 flex flex-col items-center justify-center gap-2"
              >
                <p className="text-5xl sm:text-7xl font-black tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-black/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className="pt-24 sm:pt-40 pb-20 bg-white"
        id="brands"
      >
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center md:text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-slide-up">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-black mb-6">
                Our Brands
              </p>
              <h2 className="text-5xl sm:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase">
                Three Worlds,
                <br />
                <span className="text-black">One Vision.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-black/60 font-medium pb-2 border-b-2 border-black">
              Our brands define modern luxury. Explore our curated collections
              tailored for the discerning eye.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link
              href="/serene-escapes"
              className="group block h-full"
            >
              <div className="relative overflow-hidden bg-black text-white p-10 min-h-[600px] flex flex-col justify-between cursor-pointer transition-transform duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-white">
                <div className="relative z-10">
                  <div className="mb-12 inline-flex p-4 bg-white rounded-none shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/icons/serene-white.jpeg"
                      alt="Serene Escapes"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-white/70 mb-6">
                    Collection 01
                  </p>
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    Serene
                    <br />
                    Escapes
                  </h3>
                  <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm">
                    Handpicked luxury vacation rentals — tranquil spaces crafted
                    for discerning travelers.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-between pt-10 border-t-2 border-white/10 mt-10">
                  <span className="font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                    Explore Properties
                  </span>
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/curated-design"
              className="group block h-full"
            >
              <div className="relative overflow-hidden bg-white text-black p-10 min-h-[600px] flex flex-col justify-between cursor-pointer transition-transform duration-500 hover:-translate-y-2 border-2 border-black">
                <div className="relative z-10">
                  <div className="mb-12 inline-flex p-4 bg-black rounded-none shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/icons/curated-white.jpeg"
                      alt="Curated Design"
                      width={80}
                      height={80}
                      className="object-contain invert"
                    />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-black/60 mb-6">
                    Collection 02
                  </p>
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    Curated
                    <br />
                    Design
                  </h3>
                  <p className="text-black/80 text-lg font-medium leading-relaxed max-w-sm">
                    Bespoke graphic design services — from greeting cards to
                    personalised merchandise.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-between pt-10 border-t-2 border-black/10 mt-10">
                  <span className="font-bold text-sm uppercase tracking-widest group-hover:text-black/70 transition-colors">
                    View Portfolio
                  </span>
                  <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-black group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/photobooth"
              className="group block h-full"
            >
              <div className="relative overflow-hidden bg-black text-white p-10 min-h-[600px] flex flex-col justify-between cursor-pointer transition-transform duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-white">
                <div className="relative z-10">
                  <div className="mb-12 inline-flex p-4 bg-white rounded-none shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/icons/photo-booth-white.jpeg"
                      alt="Photobooth"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-white/70 mb-6">
                    Collection 03
                  </p>
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    Photo
                    <br />
                    booth
                  </h3>
                  <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm">
                    Premium photobooth experiences — capture unforgettable
                    moments at your next event.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-between pt-10 border-t-2 border-white/10 mt-10">
                  <span className="font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                    Book Now
                  </span>
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40 bg-black text-white relative border-y-2 border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 justify-between mb-24 animate-slide-up">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-white mb-6">
                Why Choose Us
              </p>
              <h2 className="text-5xl sm:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                The Brands by Ye{' '}
                <span className="text-white underline decoration-4 underline-offset-8">
                  Promise.
                </span>
              </h2>
            </div>
            <div className="max-w-md md:pt-16">
              <p className="text-xl text-white/60 font-medium leading-relaxed">
                Every detail considered, every experience elevated to meet our
                exacting standards. We do not compromise on quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-white/10">
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
                className="group p-10 border-b-2 border-r-2 border-white/10 bg-black hover:bg-white hover:text-black transition-colors duration-300"
              >
                <span className="text-4xl text-white mb-8 block group-hover:text-black transition-colors">
                  {f.icon}
                </span>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-4">
                  {f.title}
                </h4>
                <p className="text-base text-white/50 group-hover:text-black/70 font-medium leading-relaxed transition-colors">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-24 border-t-2 border-white/10 pt-32">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6">
                Brands
                <br />
                by Ye.
              </h4>
              <p className="text-xl text-white/50 font-medium leading-relaxed max-w-sm">
                Luxury experiences and bespoke creative services for modern
                living.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-8">
                Collections
              </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Serene Escapes', href: '/serene-escapes' },
                  { label: 'Curated Design', href: '/curated-design' },
                  { label: 'Photobooth', href: '/photobooth' },
                  { label: 'Admin', href: '/admin' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-3 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-8">
                Connect
              </h4>
              <p className="text-lg text-white/60 font-medium leading-relaxed mb-6">
                Have questions? Reach out through your preferred brand section
                or contact us via WhatsApp.
              </p>
              <Link
                href="#"
                className="inline-block text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white pb-1 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t-2 border-white/10 text-xs font-bold uppercase tracking-widest text-white/40">
            <p>
              &copy; {new Date().getFullYear()} Brands by Ye. All rights
              reserved.
            </p>
            <p className="mt-4 sm:mt-0 text-white">
              Luxury · Creative · Curated
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
