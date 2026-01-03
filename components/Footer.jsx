import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-base sm:text-lg gap-2">

        {/* Left Side */}
        <p className="font-semibold">
          Powered By <span className="font-bold">Packy Media Services</span>
        </p>

        {/* Right Side */}
        <p className="font-semibold">
          Designed & Developed by{" "}
          <Link
            href="https://wa.me/918806112331"
            target="_blank"
            className="hover:underline"
          >
            ARP Digital Solutions
          </Link>
        </p>

      </div>
    </footer>
  );
}
