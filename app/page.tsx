'use client';

import { ArrowRight, Camera, Check, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-3/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute -top-40 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/40 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-between animate-slide-up">
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Brands by Ye
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground/80 mt-2 font-medium">
                Luxury • Creative • Curated
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-3 to-primary blur-lg opacity-60 rounded-full animate-pulse-slow" />
                <Sparkles className="relative w-8 h-8 text-accent animate-float" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 hover:bg-primary/15 transition-colors">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Experience Luxury Redefined
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Discover{' '}
            <span className="bg-gradient-to-r from-accent via-accent-3 to-primary bg-clip-text text-transparent animate-gradient">
              Exceptional
            </span>{' '}
            Brands
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed mb-12">
            From serene retreats to bespoke design, premium photobooth
            experiences to curated collections—discover worlds crafted for those
            who appreciate excellence
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              href="/serene-escapes"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#brands"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border rounded-xl font-semibold text-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { label: 'Premium Properties', value: '50+' },
            { label: 'Design Projects', value: '200+' },
            { label: 'Events Captured', value: '1000+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-foreground/3 to-foreground/1 p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:bg-foreground/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground/80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24"
        id="brands"
      >
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Collections
          </h3>
        </div>

        {/* Three Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Serene Escapes */}
          <Link href="/serene-escapes">
            <div
              className="group cursor-pointer h-full animate-slide-up"
              onMouseEnter={() => setHoveredCard('serene')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-primary/5 via-background to-primary/5 backdrop-blur-sm p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-3 group">
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--primary) 0%, transparent 100%)`,
                    opacity: hoveredCard === 'serene' ? 0.03 : 0,
                  }}
                />

                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:blur-2xl transition-all group-hover:w-48 group-hover:h-48 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-primary/40">
                    <Camera className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Serene Escapes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">by Ye</p>
                  <p className="text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground/80 transition-colors text-sm">
                    Discover curated luxury vacation rentals. Experience
                    tranquility in handpicked homes designed for the discerning
                    traveler.
                  </p>
                </div>
                <div className="relative z-10 flex items-center text-primary group-hover:translate-x-2 transition-all duration-300 text-sm font-semibold">
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Curated By Ye - Design */}
          <Link href="/curated-design">
            <div
              className="group cursor-pointer h-full animate-slide-up"
              style={{ animationDelay: '0.1s' }}
              onMouseEnter={() => setHoveredCard('design')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-accent/5 via-background to-accent/5 backdrop-blur-sm p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-3 group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--accent) 0%, transparent 100%)`,
                    opacity: hoveredCard === 'design' ? 0.03 : 0,
                  }}
                />

                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:blur-2xl transition-all group-hover:w-48 group-hover:h-48 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-accent to-accent/80 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-accent/40">
                    <Palette className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Curated Design
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">by Ye</p>
                  <p className="text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground/80 transition-colors text-sm">
                    Custom graphic design services. From greeting cards to
                    personalized merchandise—bespoke creations tailored to your
                    vision.
                  </p>
                </div>
                <div className="relative z-10 flex items-center text-accent group-hover:translate-x-2 transition-all duration-300 text-sm font-semibold">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Photobooth Extension */}
          <Link href="/photobooth">
            <div
              className="group cursor-pointer h-full animate-slide-up"
              style={{ animationDelay: '0.2s' }}
              onMouseEnter={() => setHoveredCard('photobooth')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-accent-2/5 via-background to-accent-2/5 backdrop-blur-sm p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
                style={{
                  borderColor:
                    hoveredCard === 'photobooth'
                      ? 'var(--accent-2)'
                      : 'var(--border)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--accent-2) 0%, transparent 100%)`,
                    opacity: hoveredCard === 'photobooth' ? 0.03 : 0,
                  }}
                />

                <div className="absolute top-0 right-0 w-40 h-40 bg-accent-2/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:blur-2xl transition-all group-hover:w-48 group-hover:h-48 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-accent-2 to-accent-2/80 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-accent-2/40">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-foreground mb-2 transition-colors"
                    style={{
                      color:
                        hoveredCard === 'photobooth'
                          ? 'var(--accent-2)'
                          : 'inherit',
                    }}
                  >
                    Photobooth
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">by Ye</p>
                  <p className="text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground/80 transition-colors text-sm">
                    Premium photobooth experiences. Book your next event and
                    capture unforgettable moments with state-of-the-art
                    equipment.
                  </p>
                </div>
                <div
                  className="relative z-10 flex items-center transition-all duration-300 group-hover:translate-x-2 text-sm font-semibold"
                  style={{ color: 'var(--accent-2)' }}
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Curated Selection',
              description:
                'Handpicked properties and services that meet our exacting standards',
            },
            {
              title: 'Attention to Detail',
              description:
                'Every element designed with precision and care for the perfect experience',
            },
            {
              title: '24/7 Support',
              description:
                'Dedicated assistance to ensure your satisfaction at every step',
            },
            {
              title: 'Luxury Promise',
              description:
                'Premium quality and exceptional service across all our collections',
            },
            {
              title: 'Creative Excellence',
              description:
                'Bespoke solutions tailored to your unique vision and needs',
            },
            {
              title: 'Memorable Moments',
              description:
                'Create and capture experiences that last a lifetime',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border/30 bg-gradient-to-br from-foreground/3 to-foreground/1 hover:border-primary/50 hover:bg-foreground/5 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-primary/3 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mb-32" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
            <div className="group">
              <h4 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                Brands by Ye
              </h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed group-hover:text-foreground/70 transition-colors">
                Luxury experiences and bespoke creative services for modern
                living.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/serene-escapes"
                    className="text-muted-foreground/80 hover:text-primary hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{' '}
                    Serene Escapes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curated-design"
                    className="text-muted-foreground/80 hover:text-accent hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{' '}
                    Curated Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photobooth"
                    className="text-muted-foreground/80 hover:text-accent-2 hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{' '}
                    Photobooth
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin"
                    className="text-muted-foreground/80 hover:text-foreground hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />{' '}
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group">
              <h4 className="font-bold text-lg text-foreground mb-4 group-hover:text-accent transition-colors">
                Connect
              </h4>
              <p className="text-sm text-muted-foreground/80 mb-4 group-hover:text-foreground/70 transition-colors">
                Have questions? Reach out through your preferred brand section
                or contact us via WhatsApp.
              </p>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground/80">
            <p>&copy; 2024-2025 Brands by Ye. All rights reserved.</p>
            <div className="mt-4 sm:mt-0 flex gap-6 font-medium">
              <span className="hover:text-foreground transition-colors">
                Luxury • Creative • Curated
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
