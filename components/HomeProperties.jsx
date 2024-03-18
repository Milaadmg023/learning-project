import properties from "@/properties.json";
import Property from "@/components/Property";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0,3)
  return (
    <>
      <section class="px-4 py-6">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties === 0 ? (
              <p>No Property Found</p>
            ) : (
              recentProperties.map((property) => (
                <Property key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProperties;
