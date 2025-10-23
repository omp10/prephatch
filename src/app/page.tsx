import Link from "next/link";
import PixelBlast from "../pages/Home";

export default function Home() {
  return (
    <div className="w-full h-screen relative -mt-20">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />

      {/* Updated Text overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 font-sans">
        <h1 className="text-5xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
          Welcome to <span className="text-purple-300">PrepHatch</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-xl mx-auto drop-shadow-xl">
          Your **interactive learning platform** designed for success and
          mastery.
        </p>
        <Link href="/dashboard">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold border-2 border-purple-300 px-10 py-4 text-lg rounded-full cursor-pointer shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-purple-500/50">
            Start Preparing Now
          </button>
        </Link>
      </div>
      
      
      
    </div>
  );
}
