import Link from "next/link";

export function NavBar() {
  return (
    <nav className="nav-bar" aria-label="Primary">
      <Link href="/">home</Link>
      <Link href="/work">work experience</Link>
      <Link href="/projects">projects</Link>
    </nav>
  );
}
