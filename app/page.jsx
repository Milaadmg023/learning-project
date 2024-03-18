import BoxContainer from "@/components/BoxContainer";
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";

export const metadata = {
  title : "Featured Properties | Find The Perfect Rental"
}

const HomePage = () => {
  return (
    <>
    <Hero/>
    <BoxContainer/>
    <HomeProperties/>
    </>
  )
}

export default HomePage;