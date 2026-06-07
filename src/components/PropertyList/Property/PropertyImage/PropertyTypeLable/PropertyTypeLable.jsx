import { MapPin } from "lucide-react";
const PropertyTypeLable = ({ type, address }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900">{type}</h3>

      <div className="mt-2 flex items-center gap-2 text-slate-500">
        <MapPin size={18} />
        <span>{address}</span>
      </div>
    </div>
  );
};
export default PropertyTypeLable;
