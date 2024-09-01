import { FaFacebook, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto grid grid-cols-3 text-gray-500 gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl mb-4 text-gray-400">Mavin Studios</h1>
        <p>
          Jl. Kemang Raya No. 12, Kemang, Jakarta Selatan, DKI Jakarta 12730,
          Indonesia
        </p>
        <p>021 719 1234</p>
        <Link href="mailto:support@mavinstudios.com">
          support@mavinstudios.com
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl mb-4 text-gray-400">Useful Links</h1>
        <Link href="/tos">Terms of Services</Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl mb-4 text-gray-400">Follow Us</h1>
        <ul className="flex gap-6 text-2xl">
          <li className="hover:text-facebook transition">
            <Link href="https://facebook.com/mavin-studios">
              <FaFacebook />
            </Link>
          </li>
          <li className="hover:text-twitter transition">
            <Link href="https://twitter.com/mavin-studios">
              <FaTwitter />
            </Link>
          </li>
          <li className="hover:text-linkedIn transition">
            <Link href="https://linkedin.com/mavin-studios">
              <FaLinkedin />
            </Link>
          </li>
          <li className="hover:text-dribbble transition">
            <Link href="https://dribbble.com/mavin-studios">
              <FaDribbble />
            </Link>
          </li>
        </ul>
        <form className="flex flex-col gap-2">
          <label htmlFor="email">
            Subscribe to our newsletter to get the latest update
          </label>
          <div className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-4 focus:outline-none h-full border-none"
            />
            <button
              type="submit"
              className="text-2xl bg-primary h-full w-12 flex items-center justify-center text-white"
            >
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
