import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";

function Hero() {
  const today = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <section className="overflow-hidden rounded-2xl bg-green-50 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-6 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:justify-between md:py-12 lg:px-12">
        <div className="w-full md:w-1/2">
          <p className="mb-2 bg-green-200 inline-block p-1 rounded-full text-sm font-medium text-green-600 sm:text-base ">
            {today}
          </p>
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base md:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="mt-5 inline-flex items-center rounded-xl bg-green-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-600 sm:px-5 sm:py-3 sm:text-base"
          >
            সব পণ্য দেখুন
            <span className="ml-2">↓</span>
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={heroImage}
            alt="আজকের বাজারের পণ্য"
            className="mx-auto h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
