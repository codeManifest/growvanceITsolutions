'use client'

import { useState } from 'react'
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
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
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
  ChatBubbleBottomCenterIcon

  
  
  
  
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, 

} from '@heroicons/react/20/solid'

const products = [
  { name: 'SEO (Search Engine Optimization)', description: 'Improve search rankings and drive organic traffic.', href: '/seo', icon: ArrowTrendingUpIcon },
  { name: 'PPC (Pay-Per-Click) Advertising', description: 'Get instant leads with targeted ads.', href: '/ppc-advertising', icon: MegaphoneIcon },
  { name: 'Social Media Marketing (SMM)', description: 'Grow engagement and brand awareness.', href: '/social-media-marketing', icon: HeartIcon },
  { name: 'Content Marketing', description: 'Attract customers with quality content.', href: '/content-marketing', icon: ClipboardDocumentIcon },
  { name: 'Web/app Development', description: 'We build fast, scalable, and user-friendly websites & mobile apps.', href: '/web-app-development', icon:   GlobeAsiaAustraliaIcon},
  { name: 'Email Marketing', description: 'Build strategic funnels that will convert', href: '/email-marketing', icon: AtSymbolIcon },
  { name: 'Affiliate Marketing', description: 'Expand reach with partnerships.', href: '/affiliate-marketing', icon: UserGroupIcon },
  { name: 'Graphics Design', description: 'Eye-catching logos, banners, and social media creatives.', href: '#', icon: SparklesIcon },
  { name: 'Content Writing', description: 'Engaging blogs, SEO content, and social media captions.', href: '#', icon: PencilSquareIcon },
]
const callsToAction = [
  { name: 'Send a Messege', href: '#', icon: ChatBubbleBottomCenterIcon },
  { name: 'Call Now', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
<div className='bg-[#144c3e] py-3 px-30   w-full hidden sm:flex '>

    <div className=''>
        
         <ul className='flex items-end gap-4 text-sm'>
        <li className='flex items-center gap-2 text-[#77cea6] border-l-black h-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>


            <a href="" className='text-[#77cea6]'>  +91 00000-00000</a>
            </li>
            <li className='flex items-center gap-2 text-[#77cea6] border-l-black h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>



            <a href="" className='text-[#77cea6]'>  xyz@gmail.com</a>
            </li>

            </ul>
            
             </div>
    <div></div>

</div>
    
    <div className="bg-primary-300 ">
        
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/resized_grov.png"
              className="h-15 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold  text-white">
            Home
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-[525px] right-0 z-10 mt-3 w-screen max-w-[95vw] overflow-hidden rounded-3xl bg-white  ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4 flex flex-wrap ">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative  flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
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
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/our-teams" className="text-sm/6 font-semibold text-white">
            Our Teams
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Our Approach
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            About
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white bg-btn-primary px-4 py-3 rounded-md hover:bg-btn-primary/70 transition-all ">
            Get Started<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/resized_grov.png"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
    </header>
  )
}
