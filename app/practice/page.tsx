import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const products = [
    { id: 1, name: "Ноутбук ASUS TUF", category: "Ноутбуки", price: 29999 },
    { id: 2, name: "Миша Logitech G102", category: "Миші", price: 899 },
    { id: 3, name: "Навушники HyperX Cloud", category: "Навушники", price: 2499 },
    { id: 4, name: "Монітор Samsung 24", category: "Монітори", price: 7999 },
    { id: 5, name: "Клавіатура Redragon", category: "Клавіатури", price: 1599 },
    { id: 6, name: "Смартфон Samsung Galaxy", category: "Смартфони", price: 11999 },
    {id: 7, name: "Смартфон Цьось Назад", category: "Смартфони", price: 15999},
  ];

  return (
    <main style={{
      maxWidth: "1000px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Магазин техніки</h1>

      <p>Загальна кількість товарів: {products.length}</p>

      <InteractiveList products={products} />
    </main>
  );
}