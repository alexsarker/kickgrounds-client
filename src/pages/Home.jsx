import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import JoinBanner from "@/components/JoinBanner";
import Tutorials from "@/components/Tutorials";

const Home = () => {
  return (
    <div className="space-y-40 lg:space-y-32">
      <Hero />
      <Featured />
      <Tutorials />
      <JoinBanner />
    </div>
  );
};

export default Home;
