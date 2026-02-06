import { Instagram, Github, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="pt-6 pb-6 px-6 bg-[#05050a] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <div className="text-xl font-bold tracking-tighter uppercase">
              Gary Hardyansyah
            </div>
            <p className="text-zinc-500 text-sm mt-1 tracking-tight">
              garryhardyansyah23@gmail.com
            </p>
          </div>
          
          <div className="flex space-x-6 md:space-x-8">
            <a 
              href="https://instagram.com/garyhrdynsyh" 
              target="_blank" 
              className="text-gray-500 hover:text-pink-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://github.com/Eunnaaa" 
              target="_blank" 
              className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://wa.me/6285721529781" 
              target="_blank" 
              className="text-gray-500 hover:text-green-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-10 border-t border-white/5">
          <p className="text-zinc-500 text-sm mb-2">
            © 2026 Gary Hardyansyah – All Rights Reserved
          </p>
          <p className="text-zinc-800 text-[10px] font-mono tracking-[0.3em] uppercase">
            V 1.0.0
          </p>
        </div>

      </div>
    </footer>
  );
};