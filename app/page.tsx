import Link from "next/link";

export default function Home() {
  return (
    <section className="hero container">
      <p className="subtitle">Ласкаво просимо до TechStore</p>

      <h1>
        Технології для
        <br />
        твого майбутнього
      </h1>

      <p className="description">
        Відкрий для себе світ сучасної техніки.
        Смартфони, ноутбуки та аксесуари в одному місці.
      </p>

      <Link href="/catalog" className="button">
        Перейти до каталогу
      </Link>
    </section>
  );
}