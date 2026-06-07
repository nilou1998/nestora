import PropertyBanner from "./PropertyBanner/PropertyBanner";

const PropertyImage = ({ image, type, available, rent }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={type}
        className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
      />
      <PropertyBanner available={available} rent={rent} />
    </div>
  );
};
export default PropertyImage;
