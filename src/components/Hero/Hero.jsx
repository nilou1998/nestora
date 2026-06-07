import { Search, ArrowRight, Star } from "lucide-react";
import Image from "../../assets/HeroImage.jpeg";
import TextHero from "./TextHero/TextHero";
import HeroImage from "./HeroImage/HeroImage";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <TextHero Star={Star} ArrowRight={ArrowRight} Search={Search} />

        <HeroImage Image={Image} />
      </div>
    </section>
  );
};

export default Hero;
