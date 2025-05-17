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
    label:  "Pricing",
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
  { href: "/services", label: "Services", icon: <Users className="mr-2 h-5 w-5 sm:hidden" /> },
  { href: "/contact", label: "Contact", icon: <Contact className="mr-2 h-5 w-5 sm:hidden" /> },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      : "px-3 py-2 text-sm font-semibold";
    const hoverClass = "hover:text-[#eea53e] hover:bg-gray-100 transition-colors duration-150";
    const textClass = "text-gray-700";

    if (item.isDropdown) {
      return (
        <div className="relative" key={item.label}>
          <button
            onClick={() => handleDropdownToggle(item.label)}
            className={`${linkClassBase} ${hoverClass} ${textClass} ${isMobile ? 'justify-between' : 'flex items-center'} w-full text-left`}
            aria-haspopup="true"
            aria-expanded={openDropdown === item.label}
          >
            {isMobile ? (
              <>
                <span className="flex items-center">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                />
              </>
            ) : (
              <>
                <span>{item.label}</span>
                <ChevronDown
                  className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                />
              </>
            )}
          </button>
          {openDropdown === item.label && item.dropdownItems && (
            <div
              className={
                isMobile
                ? "mt-1 pl-8 pr-2 space-y-1 py-1"
                : "absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-1"
              }
              role="menu"
              aria-orientation="vertical"
            >
              {item.dropdownItems.map(subItem => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  onClick={() => handleLinkClick(true)}
                  className={`flex items-center ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm'} text-gray-600 hover:bg-[#eea53e] hover:text-[#eea53e] rounded-md transition-colors duration-150 w-full`}
                  role="menuitem"
                >
                  {subItem.icon && <span className="mr-2 shrink-0">{subItem.icon}</span>}
                  <span>{subItem.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href!}
        onClick={() => handleLinkClick(false)}
        className={`${linkClassBase} ${hoverClass} ${textClass} ${isMobile ? '' : 'flex items-center'}`}
      >
        {isMobile && item.icon}
        {item.label}
      </Link>
    );
  };

  return (
    <nav ref={navRef} className="bg-white lur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
           <Link href="/" onClick={() => handleLinkClick(false)} className="text-2xl font-bold hover:text-[#eea53e] transition-colors">
  <span className="text-gray-800">NSNR</span>{' '}
  <span style={{ color: '#fab657' }}>FUTURE</span>
</Link>

          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => renderNavItem(link, false))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#eea53e] hover:bg-[#eea53e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#eea53e]transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-7 w-7" aria-hidden="true" /> : <Menu className="block h-7 w-7" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isMobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 pb-3' : 'max-h-0 opacity-0'} overflow-y-auto transition-all ease-in-out duration-300`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-inner">
          {navLinks.map(link => renderNavItem(link, true))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;