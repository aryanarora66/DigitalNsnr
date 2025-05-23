"use client"
import { Menu, X, ChevronDown, Briefcase, Users, Contact, BookOpen, Home as HomeIcon, BarChart3, Megaphone, TrendingUp, Code2 } from 'lucide-react';
import { useState, useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';

interface DropdownItem {
  href: string;
  label: string;
  icon?: ReactNode;
}

interface NavItem {
  href?: string;
  label: string;
  icon?: ReactNode;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home", icon: <HomeIcon className="mr-2 h-5 w-5 sm:hidden" /> },
  {
    label: "Services",
    icon: <Briefcase className="mr-2 h-5 w-5 sm:hidden" />,
    isDropdown: true,
    dropdownItems: [
      { href: "/services/google-ads", label: "Google Ads", icon: <TrendingUp className="mr-2 h-4 w-4 text-blue-500" /> },
      { href: "/services/facebook-ads", label: "Facebook Ads", icon: <Megaphone className="mr-2 h-4 w-4 text-indigo-500" /> },
      { href: "/services/influencer-marketing", label: "Influencer Marketing", icon: <Users className="mr-2 h-4 w-4 text-pink-500" /> },
      { href: "/services/seo", label: "SEO Optimization", icon: <BarChart3 className="mr-2 h-4 w-4 text-green-500" /> },
      { href: "/services/web-development", label: "Web Development", icon: <Code2 className="mr-2 h-4 w-4 text-purple-500" /> },
    ]
  },
  { href: "/blogs", label: "Blogs", icon: <BookOpen className="mr-2 h-5 w-5 sm:hidden" /> },
  { href: "/contact", label: "Contact", icon: <Contact className="mr-2 h-5 w-5 sm:hidden" /> },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    }
    
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (openDropdown && !isMobileMenuOpen) setOpenDropdown(null);
    else if (isMobileMenuOpen) setOpenDropdown(null);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLinkClick = (isDropdownItem: boolean = false) => {
    if (!isDropdownItem || isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
    }
    if (!isDropdownItem || (isDropdownItem && isMobileMenuOpen)) {
         setOpenDropdown(null);
    }
    else if (isDropdownItem && !isMobileMenuOpen) {
        setOpenDropdown(null);
    }
  }

  const renderNavItem = (item: NavItem, isMobile: boolean = false): ReactNode => {
    const linkClassBase = isMobile
      ? "flex items-center w-full px-4 py-3 text-base font-medium rounded-md"
      : "relative px-3 py-2 text-sm font-semibold";
    const hoverClass = "hover:text-[#eea53e] transition-all duration-300";
    const textClass = "text-gray-700";

    if (item.isDropdown) {
      return (
        <div className={`relative ${isMobile ? '' : 'group'}`} key={item.label}>
          <button
            onClick={() => handleDropdownToggle(item.label)}
            className={`${linkClassBase} ${hoverClass} ${textClass} ${isMobile ? 'justify-between' : 'flex items-center'} w-full text-left`}
            aria-haspopup="true"
            aria-expanded={openDropdown === item.label}
          >
            {isMobile ? (
              <span className="flex items-center">
                {item.icon}
                <span>{item.label}</span>
              </span>
            ) : (
              <span className="flex items-center">
                {item.icon}
                <span>{item.label}</span>
                <ChevronDown
                  className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                />
              </span>
            )}
          </button>
          <div
            className={
              isMobile
              ? `mt-1 pl-8 pr-2 space-y-1 py-1 overflow-hidden transition-all duration-300 ${openDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`
              : `absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-lg shadow-2xl ring-1 ring-black/5 focus:outline-none z-50 py-1 transition-all duration-300 transform ${
                  openDropdown === item.label ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                }`
            }
            role="menu"
            aria-orientation="vertical"
          >
            {item.dropdownItems?.map((subItem, index) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={() => handleLinkClick(true)}
                className={`flex items-center ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm'} text-gray-600 hover:bg-[#eea53e]/10 hover:text-[#eea53e] rounded-md transition-all duration-300 w-full transform hover:translate-x-1`}
                role="menuitem"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  opacity: openDropdown === item.label ? 1 : 0,
                  transform: openDropdown === item.label ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 300ms, transform 300ms'
                }}
              >
                {subItem.icon && <span className="mr-2 shrink-0 transform transition-transform duration-300 group-hover:scale-110">{subItem.icon}</span>}
                <span>{subItem.label}</span>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href!}
        onClick={() => handleLinkClick(false)}
        className={`${linkClassBase} ${hoverClass} ${textClass} ${isMobile ? '' : 'flex items-center group'}`}
      >
        {isMobile && item.icon}
        <span>{item.label}</span>
        {!isMobile && (
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#eea53e] group-hover:w-full transition-all duration-300"></span>
        )}
      </Link>
    );
  };

  return (
    <nav 
      ref={navRef} 
      className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              onClick={() => handleLinkClick(false)} 
              className="text-2xl font-bold relative group overflow-hidden"
            >
              <span className="bg-gradient-to-r from-[#eea53e]/0 to-[#eea53e]/0 absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="text-gray-800 transition-colors duration-300 group-hover:text-gray-900">NSNR</span>{' '}
              <span className="relative">
                <span className="absolute -inset-1 w-full h-full bg-[#fab657]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span style={{ color: '#fab657' }} className="relative transition-all duration-300 group-hover:text-[#e89a43]">FUTURE</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <div 
                key={link.label}
                className="transform hover:translate-y-[-2px] transition-transform duration-300"
              >
                {renderNavItem(link, false)}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#eea53e] focus:outline-none focus:ring-2 focus:ring-[#eea53e] transition-all duration-300 relative overflow-hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <span className={`absolute inset-0 bg-[#eea53e]/10 rounded-md transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></span>
              <div className="relative z-10">
                {isMobileMenuOpen ? (
                  <X className="block h-7 w-7 transform transition-all duration-300 hover:rotate-90" aria-hidden="true" />
                ) : (
                  <Menu className="block h-7 w-7 transform transition-all duration-300 hover:scale-110" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-inner">
          {navLinks.map((link, index) => (
            <div 
              key={link.label}
              className="transform transition-all duration-300"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              {renderNavItem(link, true)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
