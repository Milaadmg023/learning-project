"use client";
import InfoBox from "./InfoBox";

const BoxContainer = () => {
  const text = [
    {
      title: "For Renters",
      desc: "Find your dream rental property. Bookmark properties and contact owners.",
      btn: "Browse Properties",
      link : "/properties"
    },
    {
      title: "For Property Owners",
      desc: "List your properties and reach potential tenants. Rent as an airbnb or long term.",
      btn: "Add Property",
      link : "/properties/add"
    },
  ];
  const styles = [
    {
      bg : "bg-blue-100",
      btn : "bg-blue-500"
    },
    {
      bg : "bg-gray-100",
      btn : "bg-black"
    }
  ]

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox text = {text[0]} style= {styles[0]}/>
          <InfoBox text ={text[1]} style={styles[1]}/>
        </div>
      </div>
    </section>
  );
};

export default BoxContainer;
