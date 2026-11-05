"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const links = [
  { href: "/", label: "Team" },
  { href: "/assistant", label: "Assistant" },
  { href: "/tickets", label: "Setup tickets" },
  { href: "/progress", label: "My progress" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <aside className="sidebar">
          <div className="brand">Onboarding Hub</div>
          <nav className="nav" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="sidebar-footer">
            <span className="avatar" aria-hidden="true">
              S
            </span>
            <span>Welcome, Sara</span>
          </div>
        </aside>
        <main className="main">
          <div className="content">{children}</div>
        </main>
      </body>
    </html>
  );
}
