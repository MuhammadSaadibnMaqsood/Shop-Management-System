import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import NewLetter from "../components/NewLetter";
import Products from "../components/Products";
import Testimonail from "../components/Testimonail";

const Home = () => {
  return (
    <>
      <div>
        <div className=" w-[100%] sticky top-0">
          <Hero />
        </div>
        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
          <Products />
        </div>

        <div className=" h-screen w-full sticky top-0 overflow-hidden bg-white">
          <Testimonail />
        </div>

        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
          <NewLetter />
          <FAQ />
        </div>
        <div className="h-[100%] w-[100%] sticky top-0 overflow-hidden">
        </div>
      </div>
    </>
  );
};

export default Home;
