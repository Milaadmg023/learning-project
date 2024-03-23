import Property from "@/components/Property";
//import Properties from "@/properties.json";

const fetchProperties = async()=>{
  try {
    const res = await fetch(`http://localhost:3000/api/properties`)
    if (!res.ok){
      throw new Error('Faild to fetch properties')
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const PropertiesPage = async() => {
  const properties = await fetchProperties()
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties?.map((property , index) => {
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
