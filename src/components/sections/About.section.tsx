export default function About() {
  return (
    <section
      className="container mx-auto flex flex-col gap-12 py-16"
      id="about"
    >
      <div className="flex flex-col gap-6 max-w-3xl text-center mx-auto">
        <h2 className="font-bold text-3xl font-display">About Us</h2>
        <p className="">
          At Mavin Studios, we are driven by a passion for innovation and a
          commitment to excellence. Our story began with a simple yet ambitious
          goal: to harness the power of technology to transform the way we live,
          work, and interact with one another.
        </p>
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-8">
        <div className="rounded-lg bg-gray-200 p-4 shadow-md text-center space-y-4">
          <h3 className="font-bold text-xl">Our Mission</h3>
          <p>
            Our mission is to create cutting-edge solutions that empower
            individuals, businesses, and communities to reach their full
            potential. We believe in the transformative power of technology and
            its ability to break down barriers, foster connections, and drive
            growth.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md text-center space-y-4">
          <h3 className="font-bold text-xl">Our Values</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            animi ex repellat veniam libero magni incidunt facilis, amet maxime
            obcaecati inventore fuga itaque dignissimos et autem dolorum
            corporis accusamus cumque. Rem deleniti reiciendis autem beatae
            eaque facilis vitae numquam odit aliquid sunt, quidem, eos ad quo
            mollitia cumque cum atque.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md text-center space-y-4">
          <h3 className="font-bold text-xl">Our Team</h3>
          <p>
            Our team is comprised of talented individuals from a wide range of
            backgrounds and disciplines. We are united by our passion for
            technology and our commitment to making a positive impact on the
            world.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200 p-4 shadow-md text-center space-y-4">
          <h3 className="font-bold text-xl">Join Our Journey</h3>
          <p>
            We invite you to join us on our journey as we continue to innovate,
            grow, and push the boundaries of what is possible. Together, let's
            shape the future and create a better world for all.
          </p>
        </div>
      </div>
    </section>
  );
}
