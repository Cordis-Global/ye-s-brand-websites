'use client'

import Link from 'next/link'
import { ArrowLeft, MessageCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface Portfolio {
  id: number
  title: string
  category: string
  image: string
  description: string
}

const portfolioItems: Portfolio[] = [
  {
    id: 1,
    title: 'Luxury Greeting Cards Collection',
    category: 'Greeting Cards',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Custom-designed greeting cards with premium finishes, metallic accents, and personalized messaging.',
  },
  {
    id: 2,
    title: 'Corporate Branded Apparel',
    category: 'Customized Shirts',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'High-quality customized shirts featuring company logos, designs, and premium printing.',
  },
  {
    id: 3,
    title: 'Editorial Magazine Design',
    category: 'Magazines',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    description: 'Bespoke magazine layouts with stunning photography, layouts, and editorial design.',
  },
  {
    id: 4,
    title: 'Event Prop Designs',
    category: 'Hand Props',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    description: 'Custom hand props for events, photoshoots, and special occasions with creative flair.',
  },
  {
    id: 5,
    title: 'Instagram Photo Frame Series',
    category: 'Photo Frames',
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    description: 'Aesthetic Instagram photo frames perfect for brand promotion and social media marketing.',
  },
  {
    id: 6,
    title: 'Premium Wedding Stationery',
    category: 'Greeting Cards',
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    description: 'Elegant wedding invitations, thank-you cards, and coordinated stationery sets.',
  },
  {
    id: 7,
    title: 'Fashion Brand Merchandise',
    category: 'Customized Shirts',
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    description: 'Limited-edition apparel designs with unique artwork and premium fabric quality.',
  },
  {
    id: 8,
    title: 'Product Photography Props',
    category: 'Hand Props',
    image: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    description: 'Custom-designed props to enhance product photography and visual storytelling.',
  },
]

const categories = ['All', 'Greeting Cards', 'Customized Shirts', 'Magazines', 'Hand Props', 'Photo Frames']

export default function CuratedDesign() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<Portfolio | null>(null)

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-foreground">
                Curated by Ye
              </h1>
              <p className="text-muted-foreground mt-1">
                Bespoke graphic design & creative services
              </p>
            </div>
            <div className="hidden sm:block">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} of {portfolioItems.length} projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              {/* Portfolio Image */}
              <div
                className="w-full h-64 bg-gradient-to-br relative overflow-hidden"
                style={{ background: item.image }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">View Details</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6 bg-card">
                <div className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium text-foreground mb-3">
                  {item.category}
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4 text-center">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          From custom greeting cards to bespoke merchandise, we bring your vision to life with meticulous attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Greeting Cards',
              description: 'Premium custom greeting cards with luxury finishes and personalized designs.',
            },
            {
              title: 'Customized Shirts',
              description: 'High-quality apparel with custom designs, perfect for brands and events.',
            },
            {
              title: 'Magazines',
              description: 'Editorial design and magazine layouts with stunning visual storytelling.',
            },
            {
              title: 'Hand Props',
              description: 'Creative custom props for photoshoots, events, and special occasions.',
            },
            {
              title: 'Instagram Frames',
              description: 'Aesthetic photo frames designed for social media and brand promotion.',
            },
            {
              title: 'Brand Design',
              description: 'Complete branding packages including logos, identity, and marketing materials.',
            },
          ].map((service, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary/5 border border-accent/20 rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a custom design project in mind? Let us bring your creative vision to life. Contact us via WhatsApp to discuss your project.
          </p>
          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </section>

      {/* Portfolio Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div
              className="w-full h-80 bg-gradient-to-br"
              style={{ background: selectedItem.image }}
            />

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-muted rounded text-xs font-medium text-foreground mb-4">
                  {selectedItem.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-3">
                  {selectedItem.title}
                </h2>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <p className="text-muted-foreground text-sm mb-8">
                This is a sample from our portfolio. Each project is custom-designed to match your unique vision and requirements.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full mb-4 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
              >
                Close
              </button>

              {/* Contact Section */}
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Interested in a similar design?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let us create something custom for you. Reach out via WhatsApp to discuss your project.
                </p>
                <a
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
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
  )
}
