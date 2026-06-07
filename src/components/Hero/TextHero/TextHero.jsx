import Stats from "../Stats/Stats";

const TextHero = ({ Star, ArrowRight, Search }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
        <Star size={16} className="text-blue-600" />
        <span className="text-sm font-medium text-blue-600">
          Trusted Property Platform
        </span>
      </div>

      <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
        Find Your
        <span className="block text-blue-600">Dream Home</span>
        Today
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Discover premium apartments, villas and modern homes tailored to your
        lifestyle and budget.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          Browse Properties
          <ArrowRight size={18} />
        </button>

        <button className="rounded-2xl border border-slate-200 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">
          Learn More
        </button>
      </div>

      {/* Stats */}

      <Stats />
    </div>
  );
};
export default TextHero;
