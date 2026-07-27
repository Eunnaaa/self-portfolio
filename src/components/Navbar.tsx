import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about', external: false },
    { label: 'Work', href: '#work', external: false },
    { label: 'Contact', href: '#contact', external: false },
    { label: 'Skills', href: '#skills', external: false },
    { label: 'Education', href: '#education', external: false },
    {
      label: 'Download CV',
      href: 'https://drive.google.com/file/d/11fQ02BDeO5kaxM3u4YNMxdBl5CjCiQSE/view?usp=share_link',
      external: true,
    },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">Gary Hardyansyah</div>

        <div className="hidden md:flex space-x-10 text-sm font-medium">
          {navItems.map((item) => {
            return (
              <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="relative group py-2">
                <span className="text-gray-500 group-hover:text-black group-hover:font-bold transition-all duration-300 ease-in-out inline-block group-hover:-translate-y-0.5">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={isOpen ? 'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-b border-gray-100 max-h-96' : 'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-b border-gray-100 max-h-0'}>
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          {navItems.map((item) => {
            return (
              <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black hover:font-bold transition-all duration-300 py-2">
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
