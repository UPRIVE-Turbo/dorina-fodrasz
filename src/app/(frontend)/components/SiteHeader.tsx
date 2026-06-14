'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, FacebookLogo, InstagramLogo, List, X } from '@phosphor-icons/react'

const navLinks = [
  { href: '#rolunk', label: 'Rólunk' },
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

type SiteHeaderProps = {
  facebook?: string | null
  instagram?: string | null
}

export default function SiteHeader({ facebook, instagram }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-stone-50/0'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-serif text-2xl tracking-wide text-purple-900 group">
            <span className="block transition-transform duration-300 group-hover:-translate-y-0.5">
              Dorina
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-rose-400 -mt-1">
              Fodrász
            </span>
          </a>

          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-ink/70 hover:text-purple-900 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-purple-900 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#foglalas"
              className="px-6 py-2.5 bg-purple-900 text-white text-sm font-medium tracking-wide hover:bg-rose-400 transition-colors duration-300 transform active:scale-95 flex items-center gap-2"
            >
              Időpontot foglalok
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden text-ink p-2"
            aria-label="Menü megnyitása"
            onClick={() => setMenuOpen(true)}
          >
            <List size={28} />
          </button>
        </div>
      </div>
      </header>

      <div
        className={`fixed inset-0 bg-stone-50 z-[60] transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-24 px-6 pb-12 shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-ink p-2"
          aria-label="Menü bezárása"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col space-y-8 text-2xl font-serif text-purple-900">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-rose-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href="#foglalas"
            className="w-full block text-center px-6 py-4 bg-purple-900 text-white text-sm font-sans tracking-widest uppercase hover:bg-rose-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Foglald le az időpontod
          </a>
          <div className="flex gap-6 mt-8 justify-center text-ink/50">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <FacebookLogo size={28} weight="fill" />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
                <InstagramLogo size={28} weight="fill" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
