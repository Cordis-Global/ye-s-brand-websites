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
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-[#004E89]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="text-sm font-black text-white tracking-tight">
            Photobooth
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="relative bg-linear-to-br from-[#001f3d] via-[#004E89] to-[#0069b5] text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6DD5FA]/15 rounded-full -mr-32 -mt-32 blur-3xl animate-float pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full -ml-20 -mb-20 blur-3xl animate-float pointer-events-none"
          style={{ animationDelay: '2.5s' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 p-3 bg-white rounded-2xl shadow-2xl">
              <Image
                src="/icons/photo-booth-white.jpeg"
                alt="Photobooth"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6DD5FA] mb-3">
                Collection 03
              </p>
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Photobooth
              </h1>
              <p className="text-white/45 text-base font-light mt-1">by Ye</p>
              <p className="text-white/55 mt-3 max-w-lg text-sm leading-relaxed">
                Premium photobooth experiences — capture unforgettable moments
                with state-of-the-art equipment at your next event.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4 text-center">
            Our Packages
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Choose the perfect photobooth experience for your event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-lg border-2 overflow-hidden transition-all ${
                pkg.popular
                  ? 'border-accent shadow-xl'
                  : 'border-border hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${pkg.popular ? 'bg-accent/5' : 'bg-card'}`}>
                <h3 className="text-2xl font-light text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.duration}
                </p>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-foreground">
                      ₵{pkg.price}
                    </span>
                    <span className="text-muted-foreground">/event</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    setShowBookingForm(true);
                  }}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'border border-border text-foreground hover:bg-muted'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-2 text-center">
            {monthName}
          </h2>
          <p className="text-muted-foreground text-center">
            View available and booked dates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-muted-foreground"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              <div className="grid grid-cols-7 gap-2">
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
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        day === null
                          ? 'opacity-0 cursor-default'
                          : booked
                            ? 'bg-destructive/20 text-destructive cursor-not-allowed'
                            : isToday
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted text-foreground hover:bg-accent/20'
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

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent" />
                <span className="text-foreground">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-destructive/20" />
                <span className="text-foreground">Booked</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium text-foreground mb-4">
              Booked Dates
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {bookedDates.map((booking, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 pb-3 border-b border-border last:border-0"
                >
                  <Calendar className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {booking.bookedByName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showBookingForm && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowBookingForm(false)}
        >
          <div
            className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 border-b border-border">
              <h2 className="text-2xl sm:text-3xl font-light text-foreground">
                Book Your Photobooth
              </h2>
              <p className="text-muted-foreground mt-1">
                {selectedPackage
                  ? `${packages.find((p) => p.id === selectedPackage)?.name}`
                  : 'Select a date and complete your booking'}
              </p>
            </div>

            {submitStatus === 'success' ? (
              <div className="p-6 sm:p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Booking Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your booking. We'll confirm your reservation
                  shortly.
                </p>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleBookingSubmit}
                className="p-6 sm:p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
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
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
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
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start gap-2 text-sm text-foreground">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                    <p>
                      Payment will be processed on-site. Please bring a valid
                      form of payment to the event.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    Complete Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-12 text-center">
          Why Choose Our Photobooth?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Camera,
              title: 'Professional Quality',
              description:
                'State-of-the-art equipment with HD photo and video capabilities',
            },
            {
              icon: Users,
              title: 'Group-Friendly',
              description: 'Perfect for capturing moments with your loved ones',
            },
            {
              icon: Clock,
              title: 'Fast Service',
              description:
                'Instant prints and digital copies for instant sharing',
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
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
