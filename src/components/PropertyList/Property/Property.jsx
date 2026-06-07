import { Bath } from "lucide-react";
import PropertyImage from "./PropertyImage/PropertyImage";
import PropertyAttribute from "./PropertyAttribute/PropertyAttribute";
import PropertyTypeLable from "./PropertyImage/PropertyTypeLable/PropertyTypeLable";

const Property = ({
  type,
  image,
  bedrooms,
  bathrooms,
  surface,
  address,
  rent,
  available,
}) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-4xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <PropertyImage
        image={image}
        type={type}
        available={available}
        rent={rent}
      />

      {/* Content */}

      <div className="space-y-5 p-6">
        <PropertyTypeLable type={type} address={address} />
        {/* Features */}

        <PropertyAttribute
          Icon={Bath}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          surface={surface}
        />

        {/* Button */}

        <button
          className="
            w-full
            rounded-2xl
            bg-blue-600
            py-4
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default Property;
