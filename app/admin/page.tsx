'use client'

import React from "react"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  LogOut,
  Eye,
  EyeOff,
  BarChart3,
  Calendar,
  MapPin,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
} from 'lucide-react'

interface Booking {
  id: number
  type: 'photobooth' | 'serene' | 'design'
  clientName: string
  clientEmail: string
  date: string
  amount?: number
  status: 'confirmed' | 'pending' | 'completed'
  details: string
}

const mockBookings: Booking[] = [
  {
    id: 1,
    type: 'photobooth',
    clientName: 'Sarah & John',
    clientEmail: 'sarah@example.com',
    date: '2024-02-14',
    amount: 499,
    status: 'confirmed',
    details: 'Premium Package - 4 hours',
  },
  {
    id: 2,
    type: 'photobooth',
    clientName: 'Corporate Event',
    clientEmail: 'events@company.com',
    date: '2024-02-15',
    amount: 699,
    status: 'completed',
    details: 'Deluxe Package - 6 hours',
  },
  {
    id: 3,
    type: 'serene',
    clientName: 'Emily & Friends',
    clientEmail: 'emily@example.com',
    date: '2024-02-20',
    details: 'Oceanfront Villa Paradise - 3 nights',
    status: 'pending',
  },
  {
    id: 4,
    type: 'photobooth',
    clientName: 'Birthday Party',
    clientEmail: 'parents@example.com',
    date: '2024-02-17',
    amount: 299,
    status: 'confirmed',
    details: 'Classic Package - 2 hours',
  },
  {
    id: 5,
    type: 'design',
    clientName: 'ABC Brands',
    clientEmail: 'contact@abcbrands.com',
    date: '2024-02-22',
    details: 'Custom shirt design - 50 units',
    status: 'confirmed',
  },
  {
    id: 6,
    type: 'photobooth',
    clientName: 'Wedding Reception',
    clientEmail: 'bride@example.com',
    date: '2024-02-21',
    amount: 699,
    status: 'confirmed',
    details: 'Deluxe Package - 6 hours',
  },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'photobooth' | 'serene' | 'design'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, this should be secure)
    if (password === 'YeBrands2024') {
      setIsAuthenticated(true)
      setAuthError('')
      setPassword('')
    } else {
      setAuthError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  const filteredBookings = mockBookings.filter((booking) => {
    const typeMatch = selectedFilter === 'all' || booking.type === selectedFilter
    const statusMatch = statusFilter === 'all' || booking.status === statusFilter
    return typeMatch && statusMatch
  })

  const stats = {
    totalBookings: mockBookings.length,
    photobooth: mockBookings.filter((b) => b.type === 'photobooth').length,
    sereneEscapes: mockBookings.filter((b) => b.type === 'serene').length,
    design: mockBookings.filter((b) => b.type === 'design').length,
    revenue: mockBookings
      .filter((b) => b.amount)
      .reduce((sum, b) => sum + (b.amount || 0), 0),
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-lg border border-border p-8 shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-light text-foreground mb-2">
                Brands by Ye
              </h1>
              <p className="text-muted-foreground">Admin Dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setAuthError('')
                    }}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Login
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Demo password: YeBrands2024
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light text-foreground">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage all your bookings
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Bookings</span>
              <BarChart3 className="w-4 h-4 text-accent" />
            </div>
            <p className="text-3xl font-light text-foreground">
              {stats.totalBookings}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Photobooth</span>
              <Camera className="w-4 h-4 text-accent" />
            </div>
            <p className="text-3xl font-light text-foreground">
              {stats.photobooth}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Serene Escapes</span>
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <p className="text-3xl font-light text-foreground">
              {stats.sereneEscapes}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Design Orders</span>
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <p className="text-3xl font-light text-foreground">
              {stats.design}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Revenue</span>
              <DollarSign className="w-4 h-4 text-accent" />
            </div>
            <p className="text-3xl font-light text-foreground">
              ${stats.revenue}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Filter by Service
            </label>
            <div className="flex gap-2 flex-wrap">
              {(['all', 'photobooth', 'serene', 'design'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {filter === 'all'
                    ? 'All Services'
                    : filter === 'photobooth'
                      ? 'Photobooth'
                      : filter === 'serene'
                        ? 'Serene Escapes'
                        : 'Design'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Filter by Status
            </label>
            <div className="flex gap-2 flex-wrap">
              {(['all', 'pending', 'confirmed', 'completed'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    statusFilter === status
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {status === 'all'
                    ? 'All Status'
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors font-medium text-sm">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {booking.clientName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {booking.clientEmail}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium">
                        {booking.type === 'photobooth'
                          ? 'Photobooth'
                          : booking.type === 'serene'
                            ? 'Serene Escapes'
                            : 'Design'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {booking.details}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {booking.status === 'completed' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">
                              Completed
                            </span>
                          </>
                        ) : booking.status === 'confirmed' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-accent">
                              Confirmed
                            </span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-medium text-yellow-600">
                              Pending
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {booking.amount ? `$${booking.amount}` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="p-12 text-center">
              <AlertCircle className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                No bookings found with the selected filters
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

// Import Camera for the stats display
function Camera({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}
