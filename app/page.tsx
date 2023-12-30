import Face from "./(components)/Face";
import Features from "./(components)/Features";
import Footer from "./(components)/Footer";
import Pricing from "./(components)/Pricing";
import Readings from "./(components)/Readings";

export default function Home() {
    
  return (
    <div className="absolute w-full z-0 h-[100vh] mt-[7rem] pb-[7rem] overflow-auto">
        <Face />
        <Features />
        <Readings />
        <Pricing />
        <Footer />
    </div>
  )
}
