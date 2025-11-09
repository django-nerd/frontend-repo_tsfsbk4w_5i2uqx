import { useState } from 'react';
import { ShoppingCart, Phone } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#prodotti', label: 'Prodotti' },
    { href: '#dove-siamo', label: 'Dove siamo' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lime-600 text-white">
              <ShoppingCart size={18} />
            </span>
            <span className="font-semibold tracking-tight text-neutral-800">Non solo frutta</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-700 hover:text-lime-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="tel:+390000000000" className="inline-flex items-center gap-2 text-white bg-lime-600 hover:bg-lime-700 px-3 py-2 rounded-md">
              <Phone size={16} /> Chiama
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-neutral-100 text-neutral-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
