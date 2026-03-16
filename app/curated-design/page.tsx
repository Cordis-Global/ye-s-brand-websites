'use client';

import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: Portfolio[] = [
  {
    id: 1,
    title: 'Customised Greeting Cards',
    category: 'Greeting Cards',
    image: '/images/customised-greeting-cards.PNG',
    description:
      'Personalised greeting cards for every occasion, including birthdays, anniversaries, graduations, Valentine’s Day, appreciation, apology, and get well soon cards.',
  },
  {
    id: 2,
    title: 'Travel Magazines',
    category: 'Magazines',
    image: '/images/travel-magazine.jpeg',
    description:
      'A 24-page luxury, travel-inspired keepsake that tells your story like a global adventure. Available in hard cover and magazine editorial cover options.',
  },
  {
    id: 3,
    title: "Customised 'Lovers' Shirt",
    category: 'Customized Shirts',
    image: '/images/customised-lovers-shirt.PNG',
    description:
      'From matching couple shirts to customised boyfriend and girlfriend shirts. Celebrate love, make it official, make it personal.',
  },
  {
    id: 4,
    title: 'Customised Magazines',
    category: 'Magazines',
    image: '/images/customised-magazine.PNG',
    description:
      'Celebrate yourself or a loved one with a personalised magazine for every occasion. Bespoke magazine layouts with stunning photography, layouts, and editorial design.',
  },
  {
    id: 5,
    title: 'Selfie Photo Frames',
    category: 'Photo Frames',
    image: '/images/selfie-photo-frames.PNG',
    description:
      'Make your vendor stands interactive. Custom selfie photo frames designed to elevate birthdays, weddings, corporate events, and brand activations.',
  },
  {
    id: 6,
    title: 'Corporate Branded Apparel',
    category: 'Customized Shirts',
    image: '/images/corporate-branded-apparel.jpeg',
    description:
      'Create impactful branded materials that increase awareness, strengthen identity, and leave lasting impressions for internal events and large-scale activations.',
  },
  {
    id: 7,
    title: 'Event Hand Props',
    category: 'Hand Props',
    image: '/images/even-hand-props.PNG',
    description:
      'Make your event interactive, stylish, and photo-ready. Personalised hand props bring energy and creativity to every picture.',
  },
  {
    id: 8,
    title: 'Picture Photo Frames',
    category: 'Photo Frames',
    image: '/images/selfie-photo-frames.PNG',
    description:
      'Preserve your most special moments with personalised photo frames for birthdays, anniversaries, graduations, or memorial tributes.',
  },
];

const categories = [
  'All',
  'Greeting Cards',
  'Customized Shirts',
  'Magazines',
  'Hand Props',
  'Photo Frames',
];

export default function CuratedDesignPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<Portfolio | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-black">
      <header className="sticky top-0 z-40 bg-black text-white border-b-2 border-white/10 backdrop-blur-md">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <span className="text-xl font-black uppercase tracking-tighter hidden sm:block text-accent">
            Brands by Ye
          </span>
          <div className="w-16 sm:w-24" />
        </div>
      </header>

      <div className="relative bg-[#111111] text-white border-b-2 border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 animate-slide-up">
            <div className="shrink-0 p-6 bg-accent shadow-2xl">
              <Image
                src="/icons/curated-white.jpeg"
                alt="Curated Design"
                width={120}
                height={120}
                className="object-contain invert mix-blend-multiply"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">
                Collection 02
              </p>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Curated
                <br />
                Design
              </h1>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-6 text-left hidden sm:block">
                Bespoke graphic design & creative services — from greeting cards
                to personalized merchandise tailored to your vision.
              </p>
              <p className="text-white/60 text-base font-medium leading-relaxed max-w-md mx-auto sm:hidden">
                Bespoke graphic design & creative services — from greeting cards
                to personalized merchandise tailored to your vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black/10 bg-white sticky top-20 z-30">
        <div className="max-w-screen-2xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-3 my-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 border-2 font-bold uppercase tracking-wider text-xs transition-colors btn-capsule ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black shadow-lg rounded-none'
                    : 'bg-white text-black border-black/20 hover:border-black rounded-none'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-6 py-20 pb-32">
        <div className="mb-12 flex justify-between items-end border-b-2 border-black/10 pb-4">
          <p className="text-black/60 font-bold uppercase tracking-widest text-sm">
            Showing {filteredItems.length} of {portfolioItems.length} projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer border-2 border-black hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(44,219,30,1)] transition-all bg-white flex flex-col h-full duration-300"
              onClick={() => setSelectedItem(item)}
            >
              <div className="w-full h-80 bg-black relative overflow-hidden border-b-2 border-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-accent text-black px-6 py-3 font-black uppercase tracking-widest text-sm shadow-xl">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 bg-white">
                <div className="inline-block self-start px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-4">
                  {item.category}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-black/70 font-medium leading-relaxed flex-1 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-24 sm:py-32 border-y-2 border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 text-black bg-accent px-4 py-2 inline-block">
              Our Services
            </h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed">
              From custom greeting cards to bespoke merchandise, we bring your
              vision to life with meticulous attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-white/10">
            {[
              {
                title: 'Greeting Cards',
                description:
                  'Premium custom greeting cards with luxury finishes and personalized designs.',
              },
              {
                title: 'Customized Shirts',
                description:
                  'High-quality apparel with custom designs, perfect for brands and events.',
              },
              {
                title: 'Magazines',
                description:
                  'Editorial design and magazine layouts with stunning visual storytelling.',
              },
              {
                title: 'Hand Props',
                description:
                  'Creative custom props for photoshoots, events, and special occasions.',
              },
              {
                title: 'Instagram Frames',
                description:
                  'Aesthetic photo frames designed for social media and brand promotion.',
              },
              {
                title: 'Brand Design',
                description:
                  'Complete branding packages including logos, identity, and marketing materials.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-10 border-b-2 border-r-2 border-white/10 bg-black hover:bg-accent hover:text-black transition-colors duration-300"
              >
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="text-base text-white/50 font-medium leading-relaxed group-hover:text-black/80 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">
        <div className="bg-black border-4 border-black text-white rounded-none p-10 sm:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-8">
              Ready to Create
              <br />
              <span className="text-accent underline decoration-4 underline-offset-8">
                Something Beautiful?
              </span>
            </h2>
            <p className="text-lg text-white/70 font-medium mb-10 max-w-2xl mx-auto">
              Have a custom design project in mind? Let us bring your creative
              vision to life. Contact us via WhatsApp to discuss your project.
            </p>
            <a
              href="https://wa.me/233509928681"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-accent text-black font-black uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-all btn-capsule rounded-none shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-y-2 hover:translate-x-2"
            >
              <MessageCircle className="w-6 h-6" />
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-10 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto border-4 border-black shadow-[15px_15px_0px_0px_rgba(44,219,30,1)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-80 sm:h-[500px] bg-black relative border-b-4 border-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="(min-width: 768px) 80vw, 100vw"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 bg-accent text-black hover:bg-black hover:text-white p-2 border-2 border-black transition-colors z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8 sm:p-14 bg-[#f9f9f9]">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-black text-white font-bold uppercase tracking-widest text-xs mb-6">
                  {selectedItem.category}
                </span>
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black mb-4">
                  {selectedItem.title}
                </h2>
              </div>

              <p className="text-black/80 text-lg font-medium leading-relaxed mb-10 pb-10 border-b-2 border-black/10">
                {selectedItem.description}
              </p>

              <div className="bg-white p-8 border-4 border-black relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent border-r-4 border-b-4 border-black" />
                <h3 className="text-xl font-black uppercase tracking-tight text-black mb-3">
                  Interested in a similar design?
                </h3>
                <p className="text-sm font-medium text-black/60 mb-8">
                  Let us create something custom for you. Reach out via WhatsApp
                  to discuss your project.
                </p>
                <a
                  href="https://wa.me/233509928681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-accent text-black font-black uppercase tracking-widest px-8 py-5 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
