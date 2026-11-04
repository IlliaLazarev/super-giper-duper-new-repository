import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechStore — Магазин техніки",
  description: "Інтернет-магазин сучасної техніки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              TechStore
            </Link>

            <nav className="navigation">
              <Link href="/">Головна</Link>
              <Link href="/catalog">Каталог</Link>
              <Link href="/catalog/smartphones">Смартфони</Link>
              <Link href="/catalog/laptops">Ноутбуки</Link>
              <Link href="/contacts">Контакти</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <p>© 2026 TechStore. Усі права захищені.</p>
        </footer>
      </body>
    </html>
  );
}