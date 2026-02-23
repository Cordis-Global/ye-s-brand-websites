'use client';

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Users,
  Wifi,
} from 'lucide-react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Property {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  images: string[];
  description: string;
  guests: number;
  amenities: string[];
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Oceanfront Villa Paradise',
    location: 'Coastal Escape',
    rating: 4.9,
    reviews: 124,
    price: 350,
    images: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618183479302-1461fb3fbf18?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622708323660-335d819db51e?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'Stunning oceanfront villa with infinity pool and private beach access',
    guests: 8,
    amenities: [
      'Private Beach',
      'Infinity Pool',
      'Chef Kitchen',
      'Wine Cellar',
      'Home Theater',
    ],
  },
  {
    id: 2,
    name: 'Mountain Retreat Lodge',
    location: 'Alpine Heights',
    rating: 4.8,
    reviews: 98,
    price: 280,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-ba51a3c76f88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540932239986-310128078e6c?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Luxurious mountain lodge nestled in pristine wilderness',
    guests: 6,
    amenities: ['Mountain Views', 'Sauna', 'Hot Tub', 'Fireplace', 'Game Room'],
  },
  {
    id: 3,
    name: 'City Penthouse Elite',
    location: 'Urban Chic',
    rating: 4.9,
    reviews: 156,
    price: 420,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'Modern penthouse with panoramic skyline views and rooftop terrace',
    guests: 4,
    amenities: [
      'Skyline View',
      'Rooftop Terrace',
      'Smart Home',
      'Concierge',
      'Fine Dining',
    ],
  },
  {
    id: 4,
    name: 'Garden Estate Manor',
    location: 'Countryside Elegance',
    rating: 4.7,
    reviews: 87,
    price: 320,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Sprawling estate with manicured gardens and tennis court',
    guests: 10,
    amenities: [
      'Tennis Court',
      'Spa',
      'Garden',
      'Swimming Pool',
      'Guest House',
    ],
  },
  {
    id: 5,
    name: 'Island Sanctuary Bungalow',
    location: 'Tropical Paradise',
    rating: 4.9,
    reviews: 142,
    price: 380,
    images: [
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Exclusive island bungalow with water villa amenities',
    guests: 5,
    amenities: [
      'Water Villa',
      'Private Dock',
      'Snorkeling',
      'Spa',
      'Beach Bar',
    ],
  },
  {
    id: 6,
    name: 'Historic Chateau Luxe',
    location: 'European Classic',
    rating: 4.8,
    reviews: 113,
    price: 390,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519167758993-b21f5a92f0b5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631399619169-8c7ae57eb556?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Elegant chateau with castle architecture and vintage charm',
    guests: 7,
    amenities: [
      'Historic Architecture',
      'Library',
      'Ball Room',
      'Wine Cellar',
      'Gardens',
    ],
  },
  {
    id: 7,
    name: 'Lakeside Mansion Retreat',
    location: 'Serene Waterfront',
    rating: 4.9,
    reviews: 167,
    price: 410,
    images: [
      'https://images.unsplash.com/photo-1613161510025-896cf0d64519?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c52e39?auto=format&fit=crop&w=800&q=80',
    ],
    description:
      'Stunning lakeside mansion with private beach and water sports facilities',
    guests: 9,
    amenities: [
      'Private Beach',
      'Jet Ski',
      'Boathouse',
      'Waterfront Dining',
      'Sunset Terrace',
    ],
  },
];

export default function SereneEscapesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [guestCount, setGuestCount] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingEmail, setBookingEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const calculateSecurityDeposit = () => {
    const nights = calculateNights();
    if (nights < 7) return 500;
    return 800;
  };

  const numberOfNights = calculateNights();
  const securityDeposit = calculateSecurityDeposit();

  const handlePaystackPayment = async () => {
    if (!bookingEmail.trim()) {
      alert('Please enter your email address');
      return;
    }

    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }

    if (numberOfNights <= 0) {
      alert('Check-out date must be after check-in date');
      return;
    }

    if (!selectedProperty) return;

    setIsProcessing(true);

    const roomTotal = selectedProperty.price * numberOfNights;
    const totalAmount = (roomTotal + securityDeposit) * 100;

    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const PaystackPop = (window as any).PaystackPop;
      PaystackPop.setUp({
        key: process.env.NEXT_PUBLIC_PAYSTACK_KEY || 'pk_test_YOUR_KEY',
        email: bookingEmail,
        amount: totalAmount,
        ref: `BOOKING-${Date.now()}`,
        currency: 'GHS',
        onClose: () => {
          setIsProcessing(false);
          alert('Payment window closed');
        },
        onSuccess: (transaction: any) => {
          setIsProcessing(false);
          alert(`Booking confirmed! Your reference: ${transaction.reference}`);
          setSelectedProperty(null);
          setBookingEmail('');
          setCheckInDate('');
          setCheckOutDate('');
          setCurrentImageIndex(0);
        },
      });
      PaystackPop.openIframe();
    };
  };

  const filteredProperties =
    guestCount === 'all'
      ? properties
      : properties.filter((p) => p.guests >= parseInt(guestCount));

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-[#1D4E08]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="text-sm font-black text-white tracking-tight">
            Serene Escapes
          </span>
          <div className="w-16" />
        </div>
      </header>

      <div className="relative bg-linear-to-br from-[#0a2903] via-[#1D4E08] to-[#153805] text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-100 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/15 rounded-full -mr-32 -mt-32 blur-3xl animate-float pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#6fcf4a]/10 rounded-full -ml-20 -mb-20 blur-3xl animate-float pointer-events-none"
          style={{ animationDelay: '3s' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 p-3 bg-white rounded-2xl shadow-2xl">
              <Image
                src="/icons/serene-black.jpeg"
                alt="Serene Escapes"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6fcf4a] mb-3">
                Collection 01
              </p>
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Serene Escapes
              </h1>
              <p className="text-white/45 text-base font-light mt-1">by Ye</p>
              <p className="text-white/55 mt-3 max-w-lg text-sm leading-relaxed">
                Discover curated luxury vacation rentals. Experience tranquility
                in handpicked homes designed for the discerning traveler.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">
              Filter by Guest Capacity
            </h3>
            <div className="flex gap-2 flex-wrap">
              {['all', '4', '6', '8', '10'].map((count) => (
                <button
                  key={count}
                  onClick={() => setGuestCount(count)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    guestCount === count
                      ? 'bg-[#1D4E08] text-white shadow-md'
                      : 'bg-muted text-foreground hover:bg-[#1D4E08]/10 hover:text-[#1D4E08]'
                  }`}
                >
                  {count === 'all' ? 'All Properties' : `${count}+ Guests`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProperties.length} of {properties.length}{' '}
            properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProperty(property)}
            >
              <div
                className="w-full h-64 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${property.images[0]})` }}
              ></div>
              <div className="p-4 sm:p-6 bg-card">
                <h3 className="text-lg font-medium text-foreground mb-2 text-balance">
                  {property.name}
                </h3>

                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>

                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {property.guests} guests
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {property.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {property.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-block px-2.5 py-1 text-xs bg-muted text-foreground rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="inline-block px-2.5 py-1 text-xs text-accent font-medium">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-light text-foreground">
                      ₵{property.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      /night
                    </span>
                  </div>
                  <button className="text-accent hover:text-accent/80 transition-colors font-medium text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProperty && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full h-80 bg-cover bg-center group"
              style={{
                backgroundImage: `url(${selectedProperty.images[currentImageIndex]})`,
              }}
            >
              {selectedProperty.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === 0
                        ? selectedProperty.images.length - 1
                        : prev - 1,
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background backdrop-blur p-2 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {selectedProperty.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) =>
                      prev === selectedProperty.images.length - 1
                        ? 0
                        : prev + 1,
                    );
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background backdrop-blur p-2 rounded-full transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {selectedProperty.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {selectedProperty.images.length}
                </div>
              )}

              <button
                onClick={() => {
                  setSelectedProperty(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-4 right-4 bg-background/90 backdrop-blur p-2 rounded-full hover:bg-background transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-2">
                    {selectedProperty.name}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      {selectedProperty.rating} ({selectedProperty.reviews}{' '}
                      reviews)
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedProperty.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                {selectedProperty.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Guest Capacity
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    {selectedProperty.guests} guests
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Price per Night
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    ₵{selectedProperty.price}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-muted text-foreground rounded text-sm"
                    >
                      <Wifi className="w-4 h-4" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-medium text-foreground mb-4">
                  Book Your Stay
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {numberOfNights > 0 && (
                    <div className="bg-background p-4 rounded-lg border border-border space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Number of Nights:
                        </span>
                        <span className="text-foreground font-medium">
                          {numberOfNights}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Room (₵{selectedProperty.price}/night):
                        </span>
                        <span className="text-foreground font-medium">
                          ₵{selectedProperty.price * numberOfNights}
                        </span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Security Deposit{' '}
                          {numberOfNights < 7 ? '(< 7 nights)' : '(≥ 7 nights)'}
                          :
                        </span>
                        <span className="text-foreground font-medium">
                          ₵{securityDeposit}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        * Security deposit is fully refundable if property has
                        no damages
                      </p>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="text-foreground font-semibold">
                          Total Amount:
                        </span>
                        <span className="text-lg font-bold text-accent">
                          ₵
                          {selectedProperty.price * numberOfNights +
                            securityDeposit}
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handlePaystackPayment}
                    disabled={isProcessing || numberOfNights <= 0}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Make Payment'}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure payment powered by Paystack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
