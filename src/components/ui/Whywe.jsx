import { motion } from "framer-motion";
import { 
  MagnifyingGlassCircleIcon, 
  ArrowTrendingUpIcon, 
  PuzzlePieceIcon, 
  GlobeAltIcon, 
  UserGroupIcon 
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Helped 50+ Brands Grow Revenue",
    description: "We’ve partnered with over 50 brands, implementing data-driven strategies that directly impact their revenue growth.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "ROI-Focused Digital Marketing ",
    description: "No vanity metrics! We focus on real business results—higher conversions, increased sales, and measurable growth.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "3X Conversions in Just 90 Days",
    description: "Our proven marketing strategies have helped brands triple their conversions within three months, delivering fast and sustainable results.",
    icon: PuzzlePieceIcon,
  }
];

export default function Whywe() {
  return (
    <motion.div
      className="overflow-hidden bg-white py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
          {/* Left Section: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-green-600">Why Trust</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-green-700">
              Growvance IT Solutions?
            </p>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              At <span className="text-green-700 font-semibold">Growvance IT Solutions</span>, we offer SEO, web & app development, digital marketing, 
              and IT solutions to drive growth, visibility, and engagement.
            </p>
            <dl className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <feature.icon className="size-6 text-green-600 shrink-0" />
                  <div className="ml-4">
                    <dt className="font-semibold text-green-700">{feature.name}</dt>
                    <dd className="text-gray-600 text-sm sm:text-base">{feature.description}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              alt="company"
              src="/images/whywe.jpg"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none rounded-xl shadow-lg border-4 border-green-600"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}