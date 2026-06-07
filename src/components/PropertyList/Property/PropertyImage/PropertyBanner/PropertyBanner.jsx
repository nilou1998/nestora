const PropertyBanner = ({ available, rent }) => {
  return (
    <>
      <span
        className={`
            absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-semibold
            ${available ? "bg-green-500 text-white" : "bg-red-500 text-white"}
          `}
      >
        {available ? "Available" : "Rented"}
      </span>

      <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 font-bold text-blue-600 shadow-lg">
        ${rent}/mo
      </div>
    </>
  );
};
export default PropertyBanner;
