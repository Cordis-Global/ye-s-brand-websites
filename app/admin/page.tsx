'use client';

import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  Eye,
  EyeOff,
  LogOut,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

import Link from 'next/link';

interface Booking {
  id: number;
  type: 'photobooth' | 'serene' | 'design';
  clientName: string;
  clientEmail: string;
  date: string;
  amount?: number;
  status: 'confirmed' | 'pending' | 'completed';
  details: string;
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
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<
    'all' | 'photobooth' | 'serene' | 'design'
  >('all');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'pending' | 'confirmed' | 'completed'
  >('all');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'YeBrands2024') {
      setIsAuthenticated(true);
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const filteredBookings = mockBookings.filter((booking) => {
    const typeMatch =
      selectedFilter === 'all' || booking.type === selectedFilter;
    const statusMatch =
      statusFilter === 'all' || booking.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const stats = {
    totalBookings: mockBookings.length,
    photobooth: mockBookings.filter((b) => b.type === 'photobooth').length,
    sereneEscapes: mockBookings.filter((b) => b.type === 'serene').length,
    design: mockBookings.filter((b) => b.type === 'design').length,
    revenue: mockBookings
      .filter((b) => b.amount)
      .reduce((sum, b) => sum + (b.amount || 0), 0),
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center p-6 selection:bg-accent selection:text-black">
        <div className="w-full max-w-md">
           <div className="bg-white border-4 border-black p-10 sm:p-14 shadow-[15px_15px_0px_0px_rgba(44,219,30,1)] relative animate-scale-in">
             <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent border-r-4 border-b-4 border-black" />
            <div className="mb-10 text-center">
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black mb-2">
                Brands by Ye
              </h1>
              <p className="text-black/60 font-bold uppercase tracking-widest text-sm">Admin Dashboard</p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-black mb-3">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setAuthError('');
                    }}
                    className="w-full px-5 py-4 border-2 border-black bg-white text-black font-medium focus:outline-none focus:ring-0 focus:border-accent transition-colors placeholder:text-black/30 placeholder:font-bold placeholder:tracking-widest"
                    placeholder="ENTER PASSWORD"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="flex items-center gap-3 text-sm text-black bg-red-500 p-4 border-2 border-black font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-5 mt-4 bg-black text-white font-black uppercase tracking-widest border-2 border-transparent hover:bg-accent hover:text-black hover:border-black transition-colors"
              >
                Login to Dashboard
              </button>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-black/10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-black/40">
                Demo password: YeBrands2024
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-black selection:bg-accent selection:text-black">
      <header className="border-b-4 border-black sticky top-0 bg-white z-40">
        <div className="max-w-screen-2xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black">
              Dashboard
            </h1>
            <p className="text-sm font-bold text-black/50 uppercase tracking-widest mt-1">
              Manage all your bookings
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-widest text-black/50 hover:text-accent transition-colors hidden sm:block"
            >
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 border-2 border-black bg-black text-white hover:bg-accent hover:text-black transition-colors text-sm font-black uppercase tracking-widest"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(44,219,30,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                Total Bookings
              </span>
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <p className="text-5xl font-black uppercase tracking-tighter text-black">
              {stats.totalBookings}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">Photobooth</span>
              <Camera className="w-5 h-5 text-black" />
            </div>
            <p className="text-5xl font-black uppercase tracking-tighter text-black">
              {stats.photobooth}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                Serene Escapes
              </span>
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <p className="text-5xl font-black uppercase tracking-tighter text-black">
              {stats.sereneEscapes}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                Design Orders
              </span>
              <TrendingUp className="w-5 h-5 text-black" />
            </div>
            <p className="text-5xl font-black uppercase tracking-tighter text-black">
              {stats.design}
            </p>
          </div>

          <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(44,219,30,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">Revenue</span>
              <DollarSign className="w-5 h-5 text-black" />
            </div>
            <p className="text-4xl font-black uppercase tracking-tighter text-accent bg-black px-2 inline-block">
              ${stats.revenue}
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between border-b-4 border-black pb-8">
            <div className="flex flex-col gap-6">
                <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-black mb-3">
                    Filter by Service
                    </label>
                    <div className="flex gap-3 flex-wrap">
                    {(['all', 'photobooth', 'serene', 'design'] as const).map(
                        (filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-6 py-3 border-2 font-bold uppercase tracking-wider text-xs transition-all ${
                            selectedFilter === filter
                                ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(44,219,30,1)]'
                                : 'bg-white text-black border-black/20 hover:border-black'
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
                        ),
                    )}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-black mb-3">
                    Filter by Status
                    </label>
                    <div className="flex gap-3 flex-wrap">
                    {(['all', 'pending', 'confirmed', 'completed'] as const).map(
                        (status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-6 py-3 border-2 font-bold uppercase tracking-wider text-xs transition-all ${
                            statusFilter === status
                                ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(44,219,30,1)]'
                                : 'bg-white text-black border-black/20 hover:border-black'
                            }`}
                        >
                            {status === 'all'
                            ? 'All Status'
                            : status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                        ),
                    )}
                    </div>
                </div>
            </div>

          <div className="shrink-0 mt-6 lg:mt-0">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-black font-black uppercase tracking-widest border-2 border-transparent hover:bg-black hover:text-white hover:border-black transition-all">
              <Download className="w-5 h-5" />
              Export Data
            </button>
          </div>
        </div>

        <div className="bg-white border-4 border-black overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f0f0f0] border-b-4 border-black">
                <tr>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black border-r-2 border-black/10">
                    Client
                  </th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black border-r-2 border-black/10">
                    Service
                  </th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black border-r-2 border-black/10">
                    Date
                  </th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black border-r-2 border-black/10">
                    Details
                  </th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black border-r-2 border-black/10">
                    Status
                  </th>
                  <th className="px-6 py-5 text-sm font-black uppercase tracking-widest text-black">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/10">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-black/5 transition-colors group cursor-default"
                  >
                    <td className="px-6 py-5 border-r-2 border-black/10">
                      <div>
                        <p className="text-lg font-black uppercase tracking-tighter text-black mb-1">
                          {booking.clientName}
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest text-black/50">
                          {booking.clientEmail}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-5 border-r-2 border-black/10">
                      <span className="inline-block px-3 py-1 bg-black text-white font-bold uppercase tracking-widest text-xs">
                        {booking.type === 'photobooth'
                          ? 'Photobooth'
                          : booking.type === 'serene'
                            ? 'Serene Escapes'
                            : 'Design'}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-bold uppercase tracking-widest text-sm text-black/80 border-r-2 border-black/10">
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-black border-r-2 border-black/10 max-w-[200px] truncate">
                      {booking.details}
                    </td>
                    <td className="px-6 py-5 border-r-2 border-black/10">
                      <div className="flex items-center gap-2">
                        {booking.status === 'completed' ? (
                          <div className="flex items-center gap-2 bg-[#dcfce7] text-[#166534] px-3 py-2 border-2 border-[#166534]">
                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest">
                              Completed
                            </span>
                          </div>
                        ) : booking.status === 'confirmed' ? (
                           <div className="flex items-center gap-2 bg-accent/20 text-black px-3 py-2 border-2 border-black">
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                            <span className="text-xs font-black uppercase tracking-widest">
                              Confirmed
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 bg-[#fef08a] text-[#854d0e] px-3 py-2 border-2 border-[#854d0e]">
                            <Clock className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest">
                              Pending
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 border-r-2 border-black/10 last:border-0">
                        {booking.amount ? (
                            <span className="text-xl font-black text-black">
                                ${booking.amount}
                            </span>
                        ) : (
                            <span className="text-xl font-black text-black/30">-</span>
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="p-20 text-center bg-white border-t-2 border-black/10">
              <AlertCircle className="w-16 h-16 text-black/20 mx-auto mb-6" />
              <p className="text-xl font-black uppercase tracking-tight text-black/40">
                No bookings found with the selected filters
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

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
  );
}
