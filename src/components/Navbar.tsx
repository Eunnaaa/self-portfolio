export const Navbar = () => (
  <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <div className="text-xl font-bold tracking-tighter">
        Gary Hardyansyah
      </div>

      <div className="hidden md:flex space-x-10 text-sm font-medium">
        {['About','Work','Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="relative group py-2"
          >
            <span className="text-gray-500 group-hover:text-black group-hover:font-bold transition-all duration-300 ease-in-out inline-block group-hover:-translate-y-0.5">
              {item}
            </span>
            
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  </nav>
);