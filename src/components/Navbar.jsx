import React, { useState, useEffect } from 'react';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      // Scroll Spy: Find in-view section
      const sections = ['contact', 'journey', 'skills', 'projects', 'featured', 'about'];
      const scrollPosition = currentScroll + 220;
      let found = false;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          found = true;
          break;
        }
      }
      if (!found || currentScroll < 180) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Sync theme with localStorage or current DOM state
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', nextTheme);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Featured', id: 'featured' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Journey', id: 'journey' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform-gpu transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/85 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Logo / Name */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-text-primary font-medium tracking-widest text-sm hover:text-accent active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            M.KHACHA
          </button>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Nav with Active Scroll Spy */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className={`relative text-[11px] tracking-widest uppercase transition-all duration-200 focus:outline-none py-1 group cursor-pointer ${
                      isActive
                        ? 'text-accent font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span 
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-accent transition-all duration-300 rounded-full ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                      }`}
                    />
                  </button>
                );
              })}
              <button
                onClick={() => scrollTo('contact')}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer ${
                  activeSection === 'contact'
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'text-surface bg-text-primary hover:bg-accent hover:text-white'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-elevated/70 border border-text-tertiary/20 text-text-secondary hover:text-text-primary hover:border-accent/40 active:scale-90 hover:rotate-12 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-text-secondary hover:text-text-primary p-2 -mr-2 focus:outline-none cursor-pointer active:scale-90 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-left text-caption text-text-secondary hover:text-text-primary tracking-widest uppercase focus:outline-none"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-left text-caption text-accent tracking-widest uppercase focus:outline-none"
            >
              Contact
            </button>

            {/* Explicit Mobile Theme Switch */}
            <div className="pt-4 border-t border-text-tertiary/15 flex items-center justify-between">
              <span className="text-caption text-text-secondary uppercase tracking-wider">Appearance</span>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full border border-text-tertiary/25 bg-surface-elevated text-text-primary font-medium"
              >
                {theme === 'dark' ? (
                  <>
                    <SunIcon />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}
