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
                src="/icons/serene-white.jpeg"
                alt="Serene Escapes"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4">
                Collection 01
              </p>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Serene<br/>Escapes
              </h1>
              <p className="text-white/60 text-lg font-medium leading-relaxed max-w-2xl border-l-4 border-accent pl-6 text-left hidden sm:block">
                Discover curated luxury vacation rentals. Experience tranquility in handpicked homes designed for the discerning traveler.
              </p>
              <p className="text-white/60 text-base font-medium leading-relaxed max-w-md mx-auto sm:hidden">
                 Discover curated luxury vacation rentals. Experience tranquility in handpicked homes designed for the discerning traveler.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black/10 bg-white sticky top-20 z-30">
        <div className="max-w-screen-2xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-black">
              Filter by Guest Capacity
            </h3>
            <div className="flex gap-3 flex-wrap">
              {['all', '4', '6', '8', '10'].map((count) => (
                <button
                  key={count}
                  onClick={() => setGuestCount(count)}
                  className={`px-6 py-3 border-2 font-bold uppercase tracking-wider text-xs transition-colors btn-capsule ${
                    guestCount === count
                      ? 'bg-black text-white border-black shadow-lg rounded-none' /* Using rounded-none for a sharper look here, overriding btn-capsule */
                      : 'bg-white text-black border-black/20 hover:border-black rounded-none' 
                  }`}
                >
                  {count === 'all' ? 'All Properties' : `${count}+ Guests`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto px-6 py-20 pb-32">
        <div className="mb-12 flex justify-between items-end border-b-2 border-black/10 pb-4">
          <p className="text-black/60 font-bold uppercase tracking-widest text-sm">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group cursor-pointer border-2 border-black hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(44,219,30,1)] transition-all bg-white flex flex-col h-full duration-300"
              onClick={() => setSelectedProperty(property)}
            >
              <div
                className="w-full h-80 relative overflow-hidden bg-cover bg-center border-b-2 border-black"
                style={{ backgroundImage: `url(${property.images[0]})` }}
              >
                  <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 font-black text-xl border-2 border-black">
                     ₵{property.price}<span className="text-xs text-black/60 uppercase tracking-widest ml-1">/night</span>
                  </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-black" />
                  {property.location}
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight text-black mb-4">
                  {property.name}
                </h3>

                <div className="flex gap-6 mb-6 pb-6 border-b-2 border-black/10 text-sm font-bold uppercase text-black/60 tracking-wider">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-black" />
                    {property.guests} guests
                  </div>
                </div>

                <p className="text-black/70 font-medium leading-relaxed mb-8 flex-1">
                  {property.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {property.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-black/5 text-black border border-black/10"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-accent text-black border border-black/10">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProperty && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-10 backdrop-blur-sm"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto border-4 border-black shadow-[15px_15px_0px_0px_rgba(44,219,30,1)] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                className="relative w-full h-96 lg:h-full min-h-[400px] bg-cover bg-center border-b-4 lg:border-b-0 lg:border-r-4 border-black"
                style={{
                    backgroundImage: `url(${selectedProperty.images[currentImageIndex]})`,
                }}
                >
                {selectedProperty.images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                            prev === 0 ? selectedProperty.images.length - 1 : prev - 1
                            );
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black hover:bg-accent p-3 transition-colors z-10"
                    >
                    <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                {selectedProperty.images.length > 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) =>
                            prev === selectedProperty.images.length - 1 ? 0 : prev + 1
                            );
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black border-2 border-black hover:bg-accent p-3 transition-colors z-10"
                    >
                    <ChevronRight className="w-6 h-6" />
                    </button>
                )}

                {selectedProperty.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-widest border border-white/20">
                    {currentImageIndex + 1} / {selectedProperty.images.length}
                    </div>
                )}
                </div>

                <div className="p-8 sm:p-12 flex flex-col relative bg-[#f9f9f9]">
                    <button
                        onClick={() => {
                        setSelectedProperty(null);
                        setCurrentImageIndex(0);
                        }}
                        className="absolute top-6 right-6 bg-black text-white hover:bg-accent hover:text-black p-2 border-2 border-transparent hover:border-black transition-colors z-20"
                    >
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <p className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4 mt-2">
                        {selectedProperty.location}
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black mb-6 leading-none">
                        {selectedProperty.name}
                    </h2>
                    
                    <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-black/60 mb-8 pb-8 border-b-2 border-black/10">
                        <div className="flex items-center gap-2 text-black">
                            <Star className="w-5 h-5 fill-accent text-accent" />
                            {selectedProperty.rating} <span className="text-black/50">({selectedProperty.reviews} reviews)</span>
                        </div>
                    </div>

                    <p className="text-black/80 mb-10 text-lg font-medium leading-relaxed">
                        {selectedProperty.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                            Guest Capacity
                        </p>
                        <p className="text-xl font-black text-black flex items-center gap-2">
                            <Users className="w-5 h-5 text-accent"/> {selectedProperty.guests} guests
                        </p>
                        </div>
                        <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-black/50 mb-2">
                            Price per Night
                        </p>
                        <p className="text-3xl font-black text-black">
                            ₵{selectedProperty.price}
                        </p>
                        </div>
                    </div>

                    <div className="mb-12 pb-12 border-b-2 border-black/10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">Amenities</h3>
                        <div className="flex flex-wrap gap-3">
                        {selectedProperty.amenities.map((amenity) => (
                            <span
                            key={amenity}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-black font-bold text-xs uppercase tracking-wider"
                            >
                            <Wifi className="w-4 h-4 text-accent" />
                            {amenity}
                            </span>
                        ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 border-4 border-black relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent border-r-4 border-b-4 border-black" />
                        <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-8">
                        Book Your Stay
                        </h3>

                        <div className="space-y-6">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                            Email Address
                            </label>
                            <input
                            type="email"
                            value={bookingEmail}
                            onChange={(e) => setBookingEmail(e.target.value)}
                            placeholder="HELLO@EXAMPLE.COM"
                            className="w-full px-5 py-4 border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-0 focus:border-accent transition-colors placeholder:text-black/30 placeholder:font-bold placeholder:tracking-widest"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                                Check-in Date
                            </label>
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                className="w-full px-4 py-4 border-2 border-black bg-white text-black font-bold uppercase focus:outline-none focus:ring-0 focus:border-accent"
                            />
                            </div>
                            <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-black mb-3 block">
                                Check-out Date
                            </label>
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                className="w-full px-4 py-4 border-2 border-black bg-white text-black font-bold uppercase focus:outline-none focus:ring-0 focus:border-accent"
                            />
                            </div>
                        </div>

                        {numberOfNights > 0 && (
                            <div className="bg-black text-white p-6 space-y-4 mt-6">
                            <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                                <span className="text-white/60">Nights:</span>
                                <span>{numberOfNights}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                                <span className="text-white/60">Room (₵{selectedProperty.price}/night):</span>
                                <span>₵{selectedProperty.price * numberOfNights}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider">
                                <span className="text-white/60">Security Deposit:</span>
                                <span>₵{securityDeposit}</span>
                            </div>
                            <div className="border-t-2 border-white/20 pt-4 mt-4 flex justify-between items-center">
                                <span className="text-sm font-black uppercase tracking-widest">Total:</span>
                                <span className="text-3xl font-black text-accent">
                                ₵{selectedProperty.price * numberOfNights + securityDeposit}
                                </span>
                            </div>
                            </div>
                        )}

                        <button
                            onClick={handlePaystackPayment}
                            disabled={isProcessing || numberOfNights <= 0}
                            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-black font-black uppercase tracking-widest px-8 py-5 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:text-black disabled:hover:border-transparent mt-4"
                        >
                            {isProcessing ? 'Processing...' : 'Make Payment'}
                            {!isProcessing && <ArrowRight className="w-5 h-5 ml-2" />}
                        </button>
                        
                        <p className="text-xs font-bold uppercase tracking-widest text-black/40 text-center mt-4">
                            Secure payment powered by Paystack
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
