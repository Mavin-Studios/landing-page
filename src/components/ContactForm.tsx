// TODO create action to handle contact email
export default function ContactForm() {
  return (
    <form action="" className="flex flex-col max-w-md w-full text-left gap-4">
      <input
        type="text"
        name="name"
        className="w-full p-2"
        required
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        className="w-full p-2"
        required
        placeholder="Email Address"
      />
      <textarea name="message" placeholder="Message" className="p-2 h-36" />
      <button type="submit" className="btn-primary w-full">
        Send
      </button>
    </form>
  );
}
