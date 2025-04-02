import AnimatedComponent from "../lottie/AnimatedComponent";
import { FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-black flex items-center justify-center">
      <div className="relative isolate overflow-hidden bg-[#113a31] px-6 shadow-2xl w-full min-h-[100vh] lg:min-h-[85vh] flex flex-col lg:flex-row items-center justify-center lg:px-24">
        
        {/* Background Shape */}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            className="-mt-10 overflow-hidden"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="1"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#00A655" />
              <stop offset={1} stopColor="#1f6e5e" />
            </radialGradient>
          </defs>
        </svg>

        {/* Text Section */}
        <div className="max-w-2xl text-center lg:text-left lg:w-[45%] flex flex-col justify-center items-center lg:items-start h-full">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white">
            Your Competitor is Scaling Faster{" "}
            <span className="text-primary-mid">What's Holding You Back?</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Every day, businesses are growing, increasing sales, and dominating markets. If you're still figuring things out, you're already behind. But there's a fix.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-5 py-3 text-lg font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus:outline-none"
            >
              Let's Build Your Growth Plan
            </a>
            <a href="tel://+919876543210" className="text-lg font-semibold text-white flex items-center gap-2">
            <FaPhone className="inline" /> Free Strategy Call 
            </a>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="relative w-full lg:w-[50%] h-[50vh] lg:h-[500px] flex items-center justify-center">
          <AnimatedComponent className="w-full h-full object-contain scale-100 sm:scale-110 lg:scale-125" />
        </div>
      </div>
    </div>
  );
}