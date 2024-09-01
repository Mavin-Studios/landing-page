import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section
      className="py-12 mx-auto container text-center flex flex-col items-center gap-12"
      id="contact"
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-6xl">Get in Touch: Let's Collaborate</h2>
        <p className="max-w-5xl mx-auto">
          At Mavin Studios, we're excited to hear from ambitious brands looking
          to elevate their digital presence. Whether you're interested in
          learning more about our services, discussing a project, or simply
          saying hello, we'd love to connect.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
