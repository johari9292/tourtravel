'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X, Mountain } from 'lucide-react'
import { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'destinations', label: 'Destinations', path: '/#destinations' },
  { id: 'experiences', label: 'Experiences', path: '/#experiences' },
  { id: 'gallery', label: 'Gallery', path: '/#gallery' },
  { id: 'contact', label: 'Contact', path: '/#contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => setIsOpen(!isOpen)
  
  const navbarClasses = scrolled
    ? 'fixed w-full shadow-md bg-white text-gray-800 transition-all duration-300 z-50'
    : 'fixed w-full bg-transparent text-white transition-all duration-300 z-50'

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <img src="/logo.png" alt="UpwayTravels logo" className="h-8 w-8 object-contain" />
            <span>UpwayTravels</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={link.path}
                className={`font-medium text-base hover:text-blue-400 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-gray-800 font-medium hover:text-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}