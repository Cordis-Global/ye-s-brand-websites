'use client';

import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
} from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BookingPackage {
  id: number;
  name: string;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean;
}

interface BookedDate {
  date: string;
  bookedByName: string;
}

const packages: BookingPackage[] = [
  {
    id: 1,
    name: 'Classic Package',
    duration: '2 hours',
    price: 299,
    features: [
      '2 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      'One attendant',
    ],
  },
  {
    id: 2,
    name: 'Premium Package',
    duration: '4 hours',
    price: 499,
    popular: true,
    features: [
      '4 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      'Custom backdrop',
      'Two attendants',
      'Props included',
    ],
  },
  {
    id: 3,
    name: 'Deluxe Package',
    duration: '6 hours',
    price: 699,
    features: [
      '6 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      'Premium backdrop',
      'Two attendants',
      'Luxury props',
      'Video option',
    ],
  },
  {
    id: 4,
    name: 'Executive Package',
    duration: '8 hours',
    price: 899,
    features: [
      '8 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      'Premium backdrop',
      'Two attendants',
      'Luxury props',
      'Video option',
      'Social media integration',
      'Guest book option',
    ],
  },
  {
    id: 5,
    name: 'Platinum Package',
    duration: '10 hours',
    price: 1199,
    features: [
      '10 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      'Premium backdrop',
      'Three attendants',
      'Luxury props',
      'Video option',
      'Social media integration',
      'Green screen option',
      'GIF creation',
    ],
  },
  {
    id: 6,
    name: 'Grand Celebration Package',
    duration: '12 hours',
    price: 1499,
    features: [
      '12 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      '3 Premium backdrops',
      'Three attendants',
      'Luxury props',
      'Video option',
      'Social media integration',
      'Green screen option',
      'GIF creation',
      'Custom branding',
    ],
  },
  {
    id: 7,
    name: 'All-Day Elite Package',
    duration: '24 hours',
    price: 2499,
    features: [
      '24 hours of booth time',
      'Unlimited prints',
      'Digital copies',
      '5 Premium backdrops',
      'Four attendants',
      'Luxury props',
      'Video option',
      'Social media integration',
      'Green screen option',
      'GIF & Boomerang creation',
      'Custom branding',
      'Professional photo album',
    ],
  },
];

const bookedDates: BookedDate[] = [
  { date: '2024-02-14', bookedByName: 'Sarah & John' },
  { date: '2024-02-15', bookedByName: 'Corporate Event' },
  { date: '2024-02-17', bookedByName: 'Birthday Party' },
  { date: '2024-02-21', bookedByName: 'Wedding Reception' },
  { date: '2024-02-24', bookedByName: 'Bridal Shower' },
  { date: '2024-02-28', bookedByName: 'Private Party' },
];

export default function Photobooth() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
  });
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const isDateBooked = (date: string) =>
    bookedDates.some((b) => b.date === date);

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getCurrentMonth = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month, getDaysInMonth(firstDay));
    const daysArray: (number | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= getDaysInMonth(firstDay); i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus('success');
    setTimeout(() => {
      setShowBookingForm(false);
      setSubmitStatus('idle');
      setBookingData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
      });
    }, 2000);
  };

  const days = getCurrentMonth();
  const monthName = new Date().toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

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

      <div className="relative bg-black text-white border-b-2 border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 animate-slide-up">
            <div className="shrink-0 p-6 bg-white shadow-2xl">
              <Image
                src="/icons/photo-booth-white.jpeg"
                alt="Photobooth"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">
                Collection 03
              </p>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Photo<br/>booth
              </h1>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-6 text-left hidden sm:block">
                Premium photobooth experiences — capture unforgettable moments
                with state-of-the-art equipment at your next event.
              </p>
              <p className="text-white/60 text-base font-medium leading-relaxed max-w-md mx-auto sm:hidden">
                Premium photobooth experiences — capture unforgettable moments
                with state-of-the-art equipment at your next event.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 text-black bg-accent px-4 py-2 inline-block">
             Packages
          </h2>
          <p className="text-xl text-black/60 font-medium leading-relaxed">
            Choose the perfect photobooth experience for your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? 'border-4 border-black shadow-[10px_10px_0px_0px_rgba(44,219,30,1)] scale-105 z-10'
                  : 'border-2 border-black hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-accent text-black px-4 py-2 text-xs font-black uppercase tracking-widest border-b-4 border-l-4 border-black">
                  Most Popular
                </div>
              )}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-2">
                  {pkg.name}
                </h3>
                <p className="text-black/50 font-bold uppercase tracking-widest text-xs mb-8">
                  {pkg.duration}
                </p>

                <div className="mb-8 pb-8 border-b-2 border-black/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-black">
                      ₵{pkg.price}
                    </span>
                    <span className="text-black/50 font-bold uppercase tracking-widest text-xs">/event</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-sm font-bold text-black/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    setShowBookingForm(true);
                  }}
                  className={`w-full py-4 text-sm font-black uppercase tracking-widest transition-all mt-auto ${
                    pkg.popular
                      ? 'bg-black text-white hover:bg-accent hover:text-black border-2 border-transparent hover:border-black'
                      : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f9f9f9] border-y-2 border-black/10 py-24 sm:py-32">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black mb-4">
              {monthName}
            </h2>
            <p className="text-lg text-black/60 font-medium">
              View available and booked dates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-black p-8 sm:p-12 shadow-[15px_15px_0px_0px_rgba(44,219,30,1)]">
                <div className="grid grid-cols-7 gap-4 mb-6">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-black uppercase tracking-widest text-black/50"
                      >
                        {day}
                      </div>
                    ),
                  )}
                </div>

                <div className="grid grid-cols-7 gap-4">
                  {days.map((day, idx) => {
                    const today = new Date();
                    const isToday =
                      day === today.getDate() &&
                      today.getMonth() === new Date().getMonth();
                    const dateStr = day
                      ? `2024-02-${String(day).padStart(2, '0')}`
                      : '';
                    const booked = day
                      ? bookedDates.some((b) => b.date === dateStr)
                      : false;

                    return (
                      <div
                        key={idx}
                        className={`aspect-square flex items-center justify-center text-lg font-black transition-all border-2 ${
                          day === null
                            ? 'opacity-0 cursor-default border-transparent'
                            : booked
                              ? 'bg-black text-black/40 border-black/20 cursor-not-allowed repeating-linear-gradient'
                              : isToday
                                ? 'bg-accent text-black border-black cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                : 'bg-white text-black border-black/20 hover:border-black cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                        onClick={() => {
                          if (day && !booked) {
                            setSelectedDate(
                              `2024-02-${String(day).padStart(2, '0')}`,
                            );
                            setShowBookingForm(true);
                          }
                        }}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-black">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-black bg-white" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-black" />
                  <span>Booked</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-8 sm:p-12">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-8 border-b-4 border-accent pb-4 inline-block">
                Booked Dates
              </h3>
              <div className="space-y-6 max-h-96 overflow-y-auto pr-4">
                {bookedDates.map((booking, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 pb-6 border-b-2 border-black/10 last:border-0 last:pb-0"
                  >
                    <Calendar className="w-6 h-6 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="text-lg font-black uppercase text-black mb-1">
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-sm font-bold text-black/60 uppercase tracking-widest">
                        {booking.bookedByName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showBookingForm && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-10 backdrop-blur-sm"
          onClick={() => setShowBookingForm(false)}
        >
          <div
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-black shadow-[15px_15px_0px_0px_rgba(44,219,30,1)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 sm:p-12 bg-black text-white relative">
              <button
                onClick={() => setShowBookingForm(false)}
                className="absolute top-6 right-6 bg-accent text-black hover:bg-white hover:text-black p-2 border-2 border-transparent hover:border-black transition-colors z-20"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-4">
                Book Your Photobooth
              </h2>
              <p className="text-accent text-lg font-bold uppercase tracking-widest">
                {selectedPackage
                  ? `${packages.find((p) => p.id === selectedPackage)?.name}`
                  : 'Select a date and complete your booking'}
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="p-10 sm:p-16 text-center">
                <div className="mb-8 flex justify-center">
                  <CheckCircle2 className="w-24 h-24 text-accent" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">
                  Booking Received!
                </h3>
                <p className="text-black/60 mb-10 text-lg font-medium max-w-md mx-auto">
                  Thank you for your booking. We'll confirm your reservation shortly.
                </p>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="px-8 py-4 bg-accent text-black font-black uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleBookingSubmit}
                className="p-8 sm:p-12 space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      className="w-full px-5 py-4 border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-0 focus:border-accent transition-colors placeholder:text-black/30 placeholder:font-bold placeholder:tracking-widest"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-0 focus:border-accent transition-colors placeholder:text-black/30 placeholder:font-bold placeholder:tracking-widest"
                      placeholder="HELLO@EXAMPLE.COM"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-0 focus:border-accent transition-colors placeholder:text-black/30 placeholder:font-bold placeholder:tracking-widest"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                        Event Date
                    </label>
                    <input
                        type="date"
                        required
                        value={bookingData.eventDate || selectedDate || ''}
                        onChange={(e) =>
                        setBookingData({
                            ...bookingData,
                            eventDate: e.target.value,
                        })
                        }
                        className="w-full px-5 py-4 border-2 border-black bg-white text-black font-bold uppercase focus:outline-none focus:ring-0 focus:border-accent transition-colors"
                    />
                    </div>

                    <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                        Event Type
                    </label>
                    <select
                        required
                        value={bookingData.eventType}
                        onChange={(e) =>
                        setBookingData({
                            ...bookingData,
                            eventType: e.target.value,
                        })
                        }
                        className="w-full px-5 py-4 border-2 border-black bg-white text-black font-bold focus:outline-none focus:ring-0 focus:border-accent transition-colors appearance-none"
                    >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                    </select>
                    </div>
                </div>

                <div className="bg-accent/10 p-6 border-l-4 border-accent">
                  <div className="flex items-start gap-3 text-sm text-black font-medium">
                    <AlertCircle className="w-6 h-6 shrink-0 text-accent" />
                    <p>
                      Payment will be processed on-site. Please bring a valid
                      form of payment to the event.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-black/10">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 px-8 py-5 border-2 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-8 py-5 bg-accent text-black border-2 border-transparent font-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors"
                  >
                    Complete Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <section className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32 border-t-2 border-black/10 bg-white">
        <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-black mb-20 text-center">
          Why Choose Our Photobooth?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              icon: Camera,
              title: 'Professional Quality',
              description: 'State-of-the-art equipment with HD photo and video capabilities',
            },
            {
              icon: Users,
              title: 'Group-Friendly',
              description: 'Perfect for capturing moments with your loved ones',
            },
            {
              icon: Clock,
              title: 'Fast Service',
              description: 'Instant prints and digital copies for instant sharing',
            },
            {
              icon: Sparkles,
              title: 'Custom Options',
              description: 'Props, backdrops, and customization available',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white border-4 border-black mb-8 group-hover:bg-accent group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                  <Icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-black/60 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
