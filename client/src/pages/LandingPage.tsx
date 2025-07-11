import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronRight, TrendingUp, Zap, Shield, Cpu, Rocket, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import boltBadge from '@/assets/bolt-badge.png';

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Moving Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Mouse Follower */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 128,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AlgoTrader
            </span>
          </div>
          
          {/* Bolt.new Badge - Large and Prominent */}
          <a 
            href="https://bolt.new/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 relative z-20"
          >
            <img 
              src={boltBadge} 
              alt="Powered by Bolt.new" 
              className="h-24 w-24 md:h-28 md:w-28 shadow-xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              DEMO
            </div>
          </a>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              FUTURE OF TRADING
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced algorithmic trading platform powered by AI and quantum-level technical analysis. 
              Experience the next generation of financial technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/login">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg group">
                  Launch Platform
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/login">
                <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg">
                  Start Backtesting
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
                <Zap className="h-12 w-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Execute trades in microseconds with our quantum-optimized engine</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20 backdrop-blur-sm">
                <Shield className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade encryption and multi-layer protection</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-xl border border-pink-400/20 backdrop-blur-sm">
                <Cpu className="h-12 w-12 text-pink-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
                <p className="text-gray-300">Advanced machine learning algorithms for predictive analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="px-6 py-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Built with the most advanced tools and platforms for maximum performance and reliability
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Technology Badges */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="#3ECF8E"/>
                    <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fillOpacity=".2" fill="url(#a)"/>
                    <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l1.007 67.251H9.83c-8.19 0-12.758-9.46-7.665-15.874L45.317 2.071z" fill="#3ECF8E"/>
                    <defs>
                      <linearGradient id="a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#249361"/>
                        <stop offset="1" stopColor="#3ECF8E"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-bold text-green-400">Supabase</h3>
                <p className="text-sm text-gray-400">Database & Auth</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl border border-teal-400/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
                    <defs>
                      <radialGradient id="netlify-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#20c6b7" />
                        <stop offset="100%" stopColor="#4d9abf" />
                      </radialGradient>
                    </defs>
                    <path d="M28.589 14.135l-.014-.006L12.458 28.252c-.183.183-.24.46-.145.704l18.203 46.845c.09.23.295.39.543.422l17.764 2.283c.247.03.49-.087.637-.307L68.77 48.362c.147-.22.147-.507 0-.727L49.46 17.798c-.147-.22-.39-.337-.637-.307L31.059 19.774c-.248.032-.453.192-.543.422L28.589 14.135z" fill="url(#netlify-gradient)" />
                    <path d="M74.693 14.135l.014-.006L90.822 28.252c.183.183.24.46.145.704L72.764 75.801c-.09.23-.295.39-.543.422L54.457 78.506c-.247.03-.49-.087-.637-.307L34.51 48.362c-.147-.22-.147-.507 0-.727L53.82 17.798c.147-.22.39-.337.637-.307l17.764 2.283c.248.032.453.192.543.422L74.693 14.135z" fill="url(#netlify-gradient)" />
                  </svg>
                </div>
                <h3 className="font-bold text-teal-400">Netlify</h3>
                <p className="text-sm text-gray-400">Deployment</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-400/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
                    <defs>
                      <linearGradient id="entri-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                    <circle cx="64" cy="64" r="50" fill="url(#entri-gradient)" />
                    <path d="M45 45h38v8H45v30h30v8H37V45h8z" fill="white" />
                    <circle cx="85" cy="53" r="4" fill="white" />
                  </svg>
                </div>
                <h3 className="font-bold text-orange-400">Entri</h3>
                <p className="text-sm text-gray-400">Integration</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-400/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 128 128" fill="none">
                    <defs>
                      <linearGradient id="algorand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <circle cx="64" cy="64" r="50" fill="url(#algorand-gradient)" />
                    <path d="M40 45L64 35L88 45L64 25L40 45ZM40 83L64 93L88 83L64 103L40 83Z" fill="white" />
                    <rect x="58" y="48" width="12" height="32" fill="white" />
                  </svg>
                </div>
                <h3 className="font-bold text-blue-400">Algorand</h3>
                <p className="text-sm text-gray-400">Blockchain</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <p className="text-lg text-gray-300">
                <span className="text-cyan-400 font-semibold">Acknowledgment:</span> This project utilizes all the above technologies to deliver a comprehensive, 
                high-performance trading platform. Each technology contributes to different aspects of the system - from real-time data processing 
                to secure user authentication and blockchain integration.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;1ms</div>
                <div className="text-gray-300">Latency</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Strategies</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 AlgoTrader. Built with next-generation technology for the future of finance.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}