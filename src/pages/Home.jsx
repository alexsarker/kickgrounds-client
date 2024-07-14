import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Tutorials from "@/components/Tutorials";

const Home = () => {
  return (
    <div className="space-y-32">
      <Hero />
      <Featured />
      <Tutorials />
    </div>
  );
};

export default Home;
