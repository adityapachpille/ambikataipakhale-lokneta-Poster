import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">

        {/* Left */}
        <p className="footerText">
          Powered By Packy Media Services
        </p>

        {/* Right */}
        <p className="footerText">
          Designed & Developed by{" "}
          <Link href="https://wa.me/918806112331" target="_blank">
            ARP Digital Solutions
          </Link>
        </p>

      </div>
    </footer>
  );
}
