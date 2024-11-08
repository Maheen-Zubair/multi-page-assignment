import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="headerBtns">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}
