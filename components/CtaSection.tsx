export default function CTASection() {
  return (
    <section className="bg-[#F5F7FA] py-12 md:py-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        
        {/* HEADING */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-[#263238] leading-tight">
          Pellentesque suscipit
          <br className="hidden sm:block" />
          fringilla libero eu.
        </h2>

        {/* BUTTON */}
        <button className="mt-6 md:mt-8 bg-[#4CAF4F] text-white px-6 md:px-8 py-3 rounded-md font-medium hover:bg-green-600 transition flex items-center gap-2 mx-auto text-sm md:text-base">
          Get a Demo →
        </button>

      </div>
    </section>
  );
}