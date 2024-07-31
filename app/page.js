import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link
          href={{
            pathname: "/meals",
          }}
        >
          Meals
        </Link>
      </p>
      <p>
        <Link
          href={{
            pathname: "/meals/share",
          }}
        >
          Share Meal
        </Link>
      </p>
      <p>
        <Link
          href={{
            pathname: "/community",
          }}
        >
          Community
        </Link>
      </p>
    </main>
  );
}
