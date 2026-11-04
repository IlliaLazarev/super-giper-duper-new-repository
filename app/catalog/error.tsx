"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="loading">
      <h2>Щось пішло не так!</h2>

      <p>Не вдалося завантажити товари.</p>

      <button onClick={() => reset()} className="button">
        Спробувати ще раз
      </button>
    </div>
  );
}