import React from 'react'
import { ChevronLeft, ChevronRight, Play, Home, Compass, Plus, VideoIcon, User, WhatsappIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <svg
            className="w-24 h-8 text-red-600"
            fill="currentColor"
            viewBox="0 0 90 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" />
            <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
          </svg>
          <div className="flex-1 max-w-xl mx-4">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Banner Carousel */}
          <div className="relative mb-8 h-40 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/80">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/80">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Banner Carousel</span>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gray-200 rounded-md mb-2 relative">
                      <Play className="w-12 h-12 text-white absolute inset-0 m-auto" />
                    </div>
                    <h3 className="font-semibold truncate">Video Title {i + 1}</h3>
                    <p className="text-sm text-gray-500">Channel Name</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shorts Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Shorts</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i}>
                  <div className="aspect-[9/16] bg-gray-200 rounded-md mb-2 relative">
                    <Play className="w-8 h-8 text-white absolute inset-0 m-auto" />
                  </div>
                  <h3 className="font-semibold text-sm truncate">Short Title {i + 1}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">About Us</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Press</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Copyright</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Terms</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Terms of Service</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Help Center</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Creator Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2023 YouTube Clone. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 md:hidden">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center">
            <Compass className="h-5 w-5" />
            <span className="text-xs mt-1">Explore</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center">
            <Plus className="h-5 w-5" />
            <span className="text-xs mt-1">Create</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center">
            <VideoIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Subscriptions</span>
          </Button>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-20 right-4 md:bottom-4 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <WhatsappIcon className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}