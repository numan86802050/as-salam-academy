export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header style={{
        padding: "15px 20px",
        borderBottom: "1px solid #ddd",
        fontWeight: "bold"
      }}>
        As-Salam Academy
      </header>

      {/* Content */}
      <main style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "sans-serif"
      }}>
        <h1 style={{ fontSize: "40px" }}>
          ইসলামিক প্রশ্নোত্তর প্ল্যাটফর্ম
        </h1>

        <p style={{ marginTop: "10px" }}>
          কুরআন ও সহীহ সুন্নাহভিত্তিক নির্ভরযোগ্য তথ্য
        </p>
      </main>
    </div>
  );
}
