"use client"
import Property from "@/components/Property";
import Properties from "@/properties.json";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Properties.map((property , index) => {
            return(
              <Property property={property} key={index}/>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
