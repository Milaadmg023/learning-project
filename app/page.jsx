import BoxContainer from "@/components/BoxContainer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";

export const metadata = {
  title : "PropertyPulse | Find The Perfect Rental",
  keyWords: "Home, Property ,Sell , Buy"
}

const HomePage = async() => {
  await connectDB();
  return (
    <>
    <Hero/>
    <BoxContainer/>
    <HomeProperties/>
    </>
  )
}

export default HomePage;