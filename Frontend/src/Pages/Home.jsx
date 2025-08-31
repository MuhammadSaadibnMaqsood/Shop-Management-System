import Hero from "../components/Hero";
import Products from "../components/Products";

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

    </div>
      <div className="w-full h-screen bg-black">

      </div>
    </>
  );
};

export default Home;
