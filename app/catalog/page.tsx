import Link from "next/link";

export default async function Catalog({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  if (params.error === "1") {
    throw new Error("Тестова помилка завантаження каталогу");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="product-grid">
      <div className="product-card">
        <div className="product-icon">📱</div>
        <h2>Смартфони</h2>
        <p>Сучасні смартфони для роботи та розваг.</p>
        <Link href="/catalog/smartphones" className="button">
          Переглянути
        </Link>
      </div>

      <div className="product-card">
        <div className="product-icon">💻</div>
        <h2>Ноутбуки</h2>
        <p>Потужні ноутбуки для навчання та роботи.</p>
        <Link href="/catalog/laptops" className="button">
          Переглянути
        </Link>
      </div>
    </div>
  );
}