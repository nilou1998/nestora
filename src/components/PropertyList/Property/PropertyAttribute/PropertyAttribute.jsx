import { BedDouble, Expand } from "lucide-react";
const PropertyAttribute = ({ bedrooms, bathrooms, surface, Icon }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        <BedDouble size={20} className="text-blue-600" />
        <span className="font-medium">{bedrooms} Beds</span>
      </div>

      <div className="flex items-center gap-2">
        <Icon size={20} className="text-blue-600" />
        <span className="font-medium">{bathrooms} Baths</span>
      </div>

      <div className="flex items-center gap-2">
        <Expand size={20} className="text-blue-600" />
        <span className="font-medium">{surface}m²</span>
      </div>
    </div>
  );
};
export default PropertyAttribute;
