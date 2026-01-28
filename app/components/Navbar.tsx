import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Our Story', href: '#our-story' },
  { name: 'Mannheim Beers', href: '#mannheim-beers' },
  { name: 'Find Us', href: '#find-us' },
  { name: 'Mannheim Coffee', href: '#mannheim-coffee' },
  { name: 'Our Outlets', href: '#our-outlets' },
  { name: 'Host Parties', href: '#host-parties' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/mannheim-logo.png"
                alt="Mannheim Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-1 py-2"
                >
                  <span className="relative z-10 text-white/80 group-hover:text-[#EAB308] text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EAB308] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
