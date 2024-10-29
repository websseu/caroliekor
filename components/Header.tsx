import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <span className="inline-block bg-black text-white px-3 poppins font-light">
          kacl
        </span>
      </Link>
    </header>
  );
}
