const HeroImage = ({Image}) => {
  return (
    <div className="relative">
      <img
        src={Image}
        alt="Luxury House"
        className="h-125 w-full rounded-[40px] object-cover shadow-2xl lg:h-162.5"
      />

      <div className="absolute left-4 top-6 rounded-3xl bg-white p-5 shadow-xl backdrop-blur">
        <p className="text-sm text-slate-500">Featured Property</p>

        <h3 className="mt-1 font-bold text-slate-900">Luxury Villa</h3>
      </div>


      <div className="absolute bottom-6 left-6 rounded-3xl bg-white p-5 shadow-xl">
        <p className="text-sm text-slate-500">Monthly Rent</p>

        <h3 className="mt-1 text-2xl font-bold text-blue-600">$2,450</h3>
      </div>


      <div className="absolute right-4 top-1/2 rounded-3xl bg-white p-5 shadow-xl">
        <p className="text-sm text-slate-500">Available Homes</p>

        <h3 className="mt-1 text-2xl font-bold text-slate-900">150+</h3>
      </div>
    </div>
  );
};
export default HeroImage;
