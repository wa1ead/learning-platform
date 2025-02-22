import { Hero } from "./Hero";
import { SideBar } from "./SideBar";

export const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <Hero />
    </div>
  );
};
