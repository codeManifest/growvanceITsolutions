import { useState, useEffect } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTrendingUpIcon,
  MegaphoneIcon,
  HeartIcon,
  ClipboardDocumentIcon,
  AtSymbolIcon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon,
  SparklesIcon,
  PencilSquareIcon,
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

const products = [
  { name: 'SEO (Search Engine Optimization)', description: 'Improve search rankings and drive organic traffic.', href: '/seo', icon: ArrowTrendingUpIcon },
  { name: 'PPC (Pay-Per-Click) Advertising', description: 'Get instant leads with targeted ads.', href: '/ppc-advertising', icon: MegaphoneIcon },
  { name: 'Social Media Marketing (SMM)', description: 'Grow engagement and brand awareness.', href: '/social-media-marketing', icon: HeartIcon },
  { name: 'Content Marketing', description: 'Attract customers with quality content.', href: '/content-marketing', icon: ClipboardDocumentIcon },
  { name: 'Web/app Development', description: 'We build fast, scalable, and user-friendly websites & mobile apps.', href: '/web-app-development', icon: GlobeAsiaAustraliaIcon },
  { name: 'Email Marketing', description: 'Build strategic funnels that will convert', href: '/email-marketing', icon: AtSymbolIcon },
  { name: 'Affiliate Marketing', description: 'Expand reach with partnerships.', href: '/affiliate-marketing', icon: UserGroupIcon },
  { name: 'Graphics Design', description: 'Eye-catching logos, banners, and social media creatives.', href: '/graphics-design', icon: SparklesIcon },
  { name: 'Content Writing', description: 'Engaging blogs, SEO content, and social media captions.', href: '/content-writing', icon: PencilSquareIcon },
]

const callsToAction = [
  { name: 'Send a Message', href: '/contact-us', icon: ChatBubbleBottomCenterIcon },
  { name: 'Call Now', href: 'tel:+919876543210', icon: PhoneIcon },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our Teams', href: '/our-teams' },
  { name: 'Our Approach', href: '/our-approach' },
  { name: 'About', href: '/about-us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => {
    return location.pathname === href
  }

  const isServiceActive = (servicePath) => {
    return location.pathname.startsWith(servicePath)
  }

  return (
    <header className=' w-full z-50 transition-all duration-300 bg-[#0a5744]'>
      {/* Top Contact Bar */}
      <div className='bg-[#0e3a2f] py-2 px-4 w-full hidden sm:flex'>
        <div className='max-w-7xl w-full mx-auto flex justify-between'>
          <ul className='flex items-center gap-6 text-sm'>
            <li className='flex items-center gap-2 text-[#77cea6]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+919876543210" className='text-[#77cea6] hover:text-white transition-colors duration-200'>+91-98765-43210</a>
            </li>
            <li className='flex items-center gap-2 text-[#77cea6]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg>
              <a href="mailto:xyz@gmail.com" className='text-[#77cea6] hover:text-white transition-colors duration-200'>xyz@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            
            className="flex lg:flex-1"
          >
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="/resized_grov.png"
                className="h-12 w-auto"
              />
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-[#1a5a4a] transition-colors duration-200"
              aria-label="Open menu"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative flex items-center">
                {link.name === 'Services' ? (
                  <Popover className="relative">
                    <PopoverButton 
                      className={`flex items-center gap-x-1 text-sm font-semibold transition-colors duration-200 ${
                        isActive(link.href) || products.some(service => isServiceActive(service.href))
                          ? 'text-[#77cea6]'
                          : 'text-white hover:text-[#5bcaa5]'
                      }`}
                    >
                      {link.name}
                      <ChevronDownIcon 
                        className={`size-5 flex-none ${
                          isActive(link.href) || products.some(service => isServiceActive(service.href))
                            ? 'text-[#77cea6]'
                            : 'text-gray-300'
                        }`} 
                      />
                    </PopoverButton>

                    <PopoverPanel className="absolute top-full -left-[540px] right-0 z-10 mt-3 w-screen max-w-[95vw] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4 flex flex-wrap">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm ${
                              isServiceActive(item.href)
                                ? 'bg-[#b4f3d7]'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className={`flex size-11 flex-none items-center justify-center rounded-lg ${
                              isServiceActive(item.href)
                                ? 'bg-white text-[#1a5a4a]'
                                : 'bg-gray-50 group-hover:bg-white text-gray-600'
                            }`}>
                              <item.icon className="size-6" />
                            </div>
                            <div className="flex-auto">
                              <a 
                                href={item.href} 
                                className={`block font-semibold ${
                                  isServiceActive(item.href)
                                    ? 'text-[#1a5a4a]'
                                    : 'text-gray-900'
                                }`}
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon className="size-5 flex-none text-gray-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Popover>
                ) : (
                  <a
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-[#77cea6]'
                        : 'text-white hover:text-[#77cea6]'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </PopoverGroup>

          {/* CTA Button */}
          <motion.div 
           
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <a
              href="https://wa.me/+919876543210?text=Can%20you%20help%20me%20to%20grow%20my%20business" 
              className=" items-center text-sm font-semibold text-white bg-[#0d8621] px-6 flex gap-3 py-2.5 rounded-md hover:bg-[#3e6d39] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started <FaRegArrowAltCircleRight />

            </a>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                alt="Company Logo"
                src="/resized_grov.png"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  link.name === 'Services' ? (
                    <Disclosure as="div" key={link.name} className="-mx-3">
                      <DisclosureButton className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold ${
                        isActive(link.href) || products.some(service => isServiceActive(service.href))
                          ? 'text-[#1a5a4a] bg-[#f0f9f5]'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}>
                        {link.name}
                        <ChevronDownIcon 
                          className={`size-5 flex-none ${
                            isActive(link.href) || products.some(service => isServiceActive(service.href))
                              ? 'text-[#1a5a4a]'
                              : 'text-gray-400'
                          }`} 
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                              isServiceActive(item.href)
                                ? 'text-[#1a5a4a] bg-[#f0f9f5]'
                                : 'text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                        isActive(link.href)
                          ? 'text-[#1a5a4a] bg-[#f0f9f5]'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://wa.me/+919876543210?text=Can%20you%20help%20me%20to%20grow%20my%20business"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white bg-[#1a5a4a] hover:bg-[#77cea6] transition-colors duration-300 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}