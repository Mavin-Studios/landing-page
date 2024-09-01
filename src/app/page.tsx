import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero.section";
import Footer from "@/components/sections/Footer.section";
import About from "@/components/sections/About.section";
import Services from "@/components/sections/Services.section";
import Works from "@/components/sections/Works.section";
import Contact from "@/components/sections/Contact.section";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <main className="font-sans">
        <section className="bg-black text-gray-100 text-center py-12">
          <div className="container mx-auto">
            <h2 className="font-bold text-3xl">
              Collaborate with Our Team of Seasoned Experts
            </h2>
            <p className="text-gray-300 text-lg mt-6 max-w-5xl mx-auto">
              Leverage our team's collective expertise to elevate your brand's
              professional presence. With our seasoned professionals, you can
              trust that your brand will be delivered with precision and
              excellence.
            </p>
          </div>
        </section>
        <About />
        <Services />
        <section className="bg-black text-gray-100 flex flex-col items-center justify-center py-12 gap-10">
          <h2 className="text-3xl">
            Create your own personalized Graphic Design with us now!
          </h2>
          <button className="btn-primary">Contact Us</button>
        </section>
        <Works />
        <Contact />
      </main>

      <footer className="bg-black py-12 text-gray-300">
        <Footer />
      </footer>
    </>
  );
}
