import Property from "./Property/Property";

const PropertyList = ({ properties }) => {
  return (
    <div
      className="mx-auto max-w-7xl px-4 py-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3
  "
    >
      {properties.map((property) => (
        <Property
          key={property.id}
          type={property.type}
          image={property.image}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          available={property.available}
          rent={property.rent}
          address={property.address}
          surface={property.surface}
        />
      ))}
    </div>
  );
};
export default PropertyList;
