import imageSerialComicColored from "@/../public/serial-comic-colored.jpg";
import imageSerialComicLineArt from "@/../public/serial-comic-line-art.jpg";
import imageCharacterDesign from "@/../public/character-dessign.jpg";
import Image from "next/image";

export default function Works() {
  return (
    <section
      className="container mx-auto flex flex-col gap-12 py-16"
      id="works"
    >
      <div className="flex flex-col gap-6 max-w-3xl text-center mx-auto">
        <h2 className="font-bold text-3xl font-display">Our Works</h2>
        <p className="">
          At Mavin Studios, we are proud of the work we have done and the impact
          it has had on our clients and their communities. Our portfolio
          showcases a selection of our most notable projects, demonstrating our
          expertise and capabilities in delivering innovative solutions that
          drive real results.
        </p>
      </div>

      <div className="grid grid-flow-col-dense gap-2">
        <Image src={imageSerialComicLineArt} alt="Serial Comic" />
        <Image src={imageSerialComicColored} alt="Serial Comic" />
        <Image src={imageCharacterDesign} alt="Character Design" />
      </div>
    </section>
  );
}
