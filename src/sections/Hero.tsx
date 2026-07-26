import { useState, useEffect } from 'react';

export const Hero = () => {
  const words = ["Engineer", "Developer", "Designer"];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setSpeed(50); 
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, speed]);

  return (
    <section id="about" className="pt-40 pb-20 px-6 scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
          <span className="text-black">Software</span>
          <span className="text-gray-400 font-bold flex items-baseline">
            {displayText}
            <span className="w-6 h-1.5 md:w-10 md:h-2 bg-gray-400 ml-2 mb-1 animate-pulse" />
          </span>
        </h1>

        <p className="mt-24 text-xl md:text-2xl text-gray-500 max-w-6xl leading-relaxed tracking-tight">
          Saya Gary Hardyansyah, seorang mahasiswa informatika semester 5 yang berkompeten 
          dalam dunia teknologi dengan minat dalam pengembangan perangkat lunak, 
          pengembangan web dan pengembangan aplikasi. Memiliki pengalaman magang dan freelance sebagai pengajar 
          bidang kejuruan informatika.
        </p>
      </div>
    </section>
  );
};